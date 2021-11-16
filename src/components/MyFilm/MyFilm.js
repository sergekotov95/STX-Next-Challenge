import FilmRating from "../FilmRating/FilmRating";
import MyFilmsForm from "../MyFilmsForm/MyFilmsForm";

const MyFilm = ({myFilm, loadMyFilms}) => {

    const deleteFilm = () => {
        localStorage.removeItem(myFilm.imdbID);
        loadMyFilms();
    }

    return (
        <>
            <img src={myFilm.Poster} className="img-fluid" alt="poster"/>
            <div className="container">
                <h2>{myFilm.Title}</h2>
                <FilmRating id={myFilm.imdbID}/>
                <MyFilmsForm id={myFilm.imdbID}/>
                <button 
                    type="button" 
                    className="btn-close closeBtn" 
                    aria-label="Close"
                    onClick={() => deleteFilm(myFilm.imdbID)}>
                </button>
            </div>
        </>
    )
}

export default MyFilm;