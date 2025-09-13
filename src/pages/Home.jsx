import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card';
import { useSearchParams } from 'react-router-dom';

export default function Home() {

    const [searchParams, setSearchParams] = useSearchParams();
    const pageFromUrl = parseInt(searchParams.get("page")) || 1;
    let [page, setPage] = useState(pageFromUrl)
    const [data, setData] = useState([])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODEwNWJkYzM1NjU3ODJhZTFhMDc4ZTBkNTUyNDM0MCIsIm5iZiI6MTcwNjg5NzE4MS45NCwic3ViIjoiNjViZDJmMWQxMWMwNjYwMTdiZDJkNGU5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.XrqiUPk3N9ywirF1gDyzIfdBBHsUpBmgUKKwUODQwqU',
            },
        };

        fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`, options)
            .then((res) => res.json())
            .then((res) => {
                setData(res.results || []);
            })
            .catch((err) => console.error(err));

            setSearchParams({page})
    }, [page, setSearchParams]);

    // console.log('Data state:', data);


    return (
        <>
            <h1 className='capitalize font-bold text-3xl text-center mt-5' id='#'>trending movies</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                {
                    data.length > 0 ? data.map((movie) => (
                        <>
                            <Card key={movie?.id} title={movie?.title} img={movie?.poster_path} desc={movie?.overview} name={movie?.name} id={movie.id} />
                        </>
                    )) : <div className='spinner spinner-grow' />
                }
            </div>
            <div className="text-center">
                <button className='btn btn-primary m-5' onClick={() => setPage(index => index + 1)}><a href='#' className='text-white no-underline'>Next</a></button>
                <button className='btn btn-primary m-5' onClick={() => setPage(index => index > 1 ? index - 1 : 1)}>Prev</button>
            </div>
        </>
    )
}
