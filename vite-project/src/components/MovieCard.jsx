import '../css/MovieCard.css';

export function MovieCard({Movie}) {

    function onFavouriteClick() {
        alert("Clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} alt ={Movie.title}/>
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onFavouriteClick}>
                    ♡   
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3> {Movie.title}</h3>
            <p> {Movie.year}.split('-')[0]</p>
        </div>
    </div>

}

export default MovieCard;