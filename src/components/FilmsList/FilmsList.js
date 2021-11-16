import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import apiService from '../../services/apiService';
import Film from '../Film/Film';

import './filmsList.css';

const FilmsList = () => {

    const [films, setFilms] = useState([]);
    let searchTitle = useSelector(store => store.searchTitle);
    const filmsService = apiService();

    useEffect(() => {
        filmsService.getSearchResults(searchTitle)
            .then(result => setFilms(result))
            // eslint-disable-next-line
    }, [searchTitle])

    return (
        <>
            {
                films?.length ? (
                    <main className="main">
                        <div className="container">
                            <ul className="list-group">
                                {films.map(film => (
                                    <li className="list-group-item d-flex" key={film.imdbID}>
                                        <Film filmData={film}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </main>
                ) : <h1 className="display-1 errorMessage">There is no films with such title</h1>
            }
        </>
    )
}

export default FilmsList;