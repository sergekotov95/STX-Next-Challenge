import { useState } from "react";
import { useForm } from "react-hook-form";

import { Popover } from 'react-tiny-popover';

const MyFilmsForm = ({id}) => {

    const currentFilm = JSON.parse(localStorage.getItem(id));

    const [myFilmViewed, setMyFilmViewed] = useState(currentFilm.viewed);
    const [myRating, setMyRating] = useState(currentFilm.myRating);
    const [isPopoverOpen, setIsPopoverOpen] = useState();

    const { handleSubmit } = useForm();

    const onCheckboxChange = (e) => {
        setMyFilmViewed(e.target.checked);
    }

    const onRatingChange = (e) => {
        setMyRating(e.target.value);
    }

    const onFormChanged = () => {
        currentFilm.viewed = myFilmViewed;
        currentFilm.myRating = myRating; 
        localStorage.setItem(id, JSON.stringify(currentFilm));
    }

    return (
        <form className="myFilmsForm" onSubmit={handleSubmit(onFormChanged)}>
            <div className="mb-3 form-check">
                <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="viewed"
                    onChange={onCheckboxChange}
                    checked={myFilmViewed}/>
                <label className="form-check-label" htmlFor="viewed">Viewd</label>
            </div>
            <div className="mb-3">
                <label htmlFor="ratingSelect" className="form-label">My Rating</label>
                <select 
                    className="form-select"  
                    id="ratingSelect"
                    onChange={onRatingChange}
                    value={myRating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <Popover
                isOpen={isPopoverOpen}
                positions={['right']}
                padding={10}
                onClickOutside={() => setIsPopoverOpen(false)}
                content={
                    <div>My notice was successfully saved!</div>
                }>
                <button 
                    className="btn btn-primary" 
                    type="submit"
                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                        Submit rating
                </button>
            </Popover>
        </form>
    )
}

export default MyFilmsForm;