import { useEffect, useState } from "react";
import apiService from "../../services/apiService";

const FilmRating = ({id}) => {
    const [ratings, setRatings] = useState();
    const filmService = apiService();
    

    useEffect(() => {
        filmService.getFilmData(id)
            .then(result => setRatings(result.Ratings))
            // eslint-disable-next-line
    }, [])

    function renderItems(rates) {
        const ratings = rates.map((rate, i) => {
            return (
                <li className="list-group-item" key={i}>
                    <span>{rate.Source}: </span><span>{rate.Value}</span>
                </li>
            )
        })
        return (
            <ul className="list-group">
                {ratings}
            </ul>
        ); 
    }

    return (
        ratings?.length ? (
            <>
                <h3>Ratings</h3>
                {renderItems(ratings)}
            </>
        ) : "Wait a second"
    )
}

export default FilmRating; 