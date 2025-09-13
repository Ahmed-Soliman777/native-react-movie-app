import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../assets/logo.png'

export default function Details() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODEwNWJkYzM1NjU3ODJhZTFhMDc4ZTBkNTUyNDM0MCIsIm5iZiI6MTcwNjg5NzE4MS45NCwic3ViIjoiNjViZDJmMWQxMWMwNjYwMTdiZDJkNGU5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.XrqiUPk3N9ywirF1gDyzIfdBBHsUpBmgUKKwUODQwqU',
      },
    };

    if (!id) return;

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => setSelectedMovie(res))
      .catch((err) => console.error(err));
  }, [id]);

  console.log(selectedMovie);


  return (
    <div>
      {selectedMovie ? (
        <div className="flex justify-evenly items-center g-5 m-5">
          <div className="w-[50%]">
            <img
              className="w-full"
              src={`https://image.tmdb.org/t/p/w300/${selectedMovie.backdrop_path || selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />
          </div>
          <div className='w-[40%]'>
            <h1 className="text-4xl">{selectedMovie.title}</h1>
            <p>{selectedMovie.overview}</p>
            <p>Origin : <span className="font-bold">{selectedMovie.origin_country[0]}</span></p>
            <p>Language : <span className="font-bold">{selectedMovie.original_language}</span></p>
            <ul className='flex gap-2 p-0'>
              Genre:
              {selectedMovie.genres.map((item, index) =>
                <li key={index} className='font-bold'>{item.name}</li>
              )}
            </ul>
            <ul className='flex flex-wrap gap-2 p-0'>
              Producers:
              {selectedMovie.production_companies.map((item, index) =>
                <li key={index} className='font-bold'><img src={`https://image.tmdb.org/t/p/w185${item.logo_path}`} alt={item.name} className='w-[60%]' />{item.name}</li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
