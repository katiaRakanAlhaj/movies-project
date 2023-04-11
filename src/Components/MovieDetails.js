import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  console.log(param.id);
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <div className="card p-3 mt-2" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="details-movie">
          <div>
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            />
          </div>
          <div className="m-auto">
            <p className="border-bottom">
              <span>اسم الفيلم: </span>
              {movie.title}
            </p>
            <p className="border-bottom mt-3">
              <span> تاريخ الفيلم: </span>
              {movie.release_date}
            </p>
            <p className="border-bottom mt-3">
              <span> عدد المقيمين: </span>
              {movie.vote_count}
            </p>
            <p className="border-bottom mt-3">
              <span> التقييم: </span>
              {movie.vote_average}
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-5 p-3" style={{ backgroundColor: '#f8f9fa' }}>
        <h5>القصة</h5>
        <p className="film_story">{movie.overview}</p>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Link to="/">
          <button
            className="btn btn-primary mx-2"
            style={{
              backgroundColor: '#b45b35',
              border: 'none',
            }}
          >
            عوده للرئيسيه
          </button>
        </Link>
        <a href={movie.homepage}>
          <button
            style={{ backgroundColor: '#b45b35', border: 'none' }}
            className="button-watch-film btn btn-primary"
          >
            مشاهده الفيلم
          </button>
        </a>
      </div>
    </div>
  );
};
export default MovieDetails;
