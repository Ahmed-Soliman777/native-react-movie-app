import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setPage } from "../redux/slices/movieSlice";
import MovieSlider from "../components/MovieSlider";

export default function Home() {
    const dispatch = useDispatch();
    const { items: data, page } = useSelector((state) => state.movies);
    const [searchParams, setSearchParams] = useSearchParams();

    const pageFromUrl = parseInt(searchParams.get("page")) || 1;

    useEffect(() => {
        dispatch(setPage(pageFromUrl));
    }, [dispatch, pageFromUrl]);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODEwNWJkYzM1NjU3ODJhZTFhMDc4ZTBkNTUyNDM0MCIsIm5iZiI6MTcwNjg5NzE4MS45NCwic3ViIjoiNjViZDJmMWQxMWMwNjYwMTdiZDJkNGU5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.XrqiUPk3N9ywirF1gDyzIfdBBHsUpBmgUKKwUODQwqU",
            },
        };

        fetch(
            `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`,
            options
        )
            .then((res) => res.json())
            .then((res) => {
                dispatch(setMovies(res.results || []));
                setSearchParams({ page });
            })
            .catch((err) => console.error(err));
    }, [page, dispatch, setSearchParams]);

    return (
        <>
        <MovieSlider />
            <h1 className="capitalize font-bold text-3xl text-center mt-5">
                trending movies
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                {data.length > 0 ? (
                    data.map((movie) => (
                        <Card
                            key={movie?.id}
                            title={movie?.title}
                            img={movie?.poster_path}
                            desc={movie?.overview}
                            name={movie?.name}
                            id={movie.id}
                        />
                    ))
                ) : (
                    <div className="spinner spinner-grow" />
                )}
            </div>

            <div className="text-center">
                <button
                    className="btn btn-primary m-5"
                    onClick={() => dispatch(setPage(page + 1))}
                >
                    <span className="text-white">Next</span>
                </button>
                <button
                    className="btn btn-primary m-5"
                    onClick={() => dispatch(setPage(page > 1 ? page - 1 : 1))}
                >
                    Prev
                </button>
            </div>
        </>
    );
}
