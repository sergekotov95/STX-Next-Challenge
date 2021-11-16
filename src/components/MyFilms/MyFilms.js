import { useEffect, useState } from 'react';
import MyFilm from '../MyFilm/MyFilm';

import './myFilms.css'; 

const MyFilms = () => {

    const [myFilms, setMyFilms] = useState([]);
    
    useEffect(() => {
        loadMyFilms();
    }, []);

    const loadMyFilms = () => {
        let arr = [];
        Object.keys(localStorage).forEach(id => {
            arr.push(JSON.parse(localStorage.getItem(id)))
        })
        setMyFilms(arr);
    }

    return (
        <>
            <div className="container myListContainer">
                <h2>My Films: </h2>
                <ul className="list-group">
                    {myFilms.map(myFilm => (
                        <li className="list-group-item d-flex" key={myFilm.imdbID}>
                            <MyFilm myFilm={myFilm} loadMyFilms={loadMyFilms}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MyFilms;