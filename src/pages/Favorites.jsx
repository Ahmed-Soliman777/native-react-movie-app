import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../redux/slices/favoritesSlice";

export default function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.items);

  console.log(favorites);

  return (
    <div className="">
      <div className="mx-5">
        <h1>My Favorite Movies</h1>
        {favorites.length > 0 ? (
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
            {favorites.map((movie) => (
              <div key={movie.id} className="bg-amber-50 p-5 rounded-2xl">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.img}`}
                  alt={movie.title || movie.name}
                  className="mx-auto"
                />
                <h1 className="text-center">{movie.title || movie.name}</h1>

                <button
                  className="btn btn-danger w-full"
                  onClick={() => dispatch(removeFavorite(movie.id))}
                >
                  <i className="fa-solid fa-trash "></i>
                  Remove
                </button>

                <Link
                  className="btn btn-warning my-3 w-full"
                  to={`/details/${movie.id}`}
                >
                  <i className="fa-solid fa-eye"></i>
                  Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </div>
  );
}
