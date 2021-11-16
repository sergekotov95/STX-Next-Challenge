import { useState } from 'react';
import { Popover } from 'react-tiny-popover';

import FilmRating from '../FilmRating/FilmRating';
import apiService from '../../services/apiService';

const Film = ({filmData}) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState();
    const filmsService = apiService();

    const addFilm = () => {
        filmsService.getFilmData(filmData.imdbID)
            .then(result => localStorage.setItem(result.imdbID, JSON.stringify({...result, viewed: false, myRating: 1})))
            .catch(e => {throw new Error(`Error: ${e.status} occured!`)});
        
        setIsPopoverOpen(!isPopoverOpen);
    }
    
    const isAddBtnDisabled = () => {
        return Object.keys(localStorage).find(id => id === filmData.imdbID); 
    }

    return (
        <>
            <img src={filmData.Poster} className="img-thumbnail" alt="poster"/>
            <div className="container">
                <h2>{filmData.Title}</h2>
                <FilmRating id={filmData.imdbID}/>
                <Popover
                    isOpen={isPopoverOpen}
                    positions={['right']}
                    padding={10}
                    onClickOutside={() => setIsPopoverOpen(false)}
                    content={
                        <div>Film was successfully added to "My Films"!</div>
                    }>
                    <button 
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        className="btn btn-primary addBtn"
                        disabled={isAddBtnDisabled()}
                        onClick={addFilm}>
                            Add to My Films
                    </button>
                </Popover>
            </div>
        </>
    )
}

export default Film; 