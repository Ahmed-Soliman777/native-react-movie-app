import React from "react"
import { useSelector } from "react-redux"

export default function MovieSlider() {
    const movies = useSelector((state) => state.movies.items)
    const firstFive = movies.slice(0, 5)

    if (firstFive.length === 0) return null

    return (
        <div className="container my-5 ">
            <h2 className="text-center mb-4">Top 5 Movies</h2>
            <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {firstFive.map((movie, index) => (
                        <div
                            key={movie.id}
                            className={`carousel-item ${index === 0 ? "active" : ""} h-[25%]`}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                                className="d-block mx-auto rounded"
                                alt={movie.title || movie.name}
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                                <h5>{movie.title || movie.name}</h5>
                                <p>{movie.overview?.slice(0, 100)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev bg-dark"
                    type="button"
                    data-bs-target="#movieCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next bg-dark"
                    type="button"
                    data-bs-target="#movieCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
