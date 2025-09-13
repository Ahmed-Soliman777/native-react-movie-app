import { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import CardModal from './Modal'
import { Link } from 'react-router-dom'
import { FavoritesContext } from './Context';
import { CiHeart } from 'react-icons/ci';

export default function Card({ title, name, img, desc, id }) {

    const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);

    const movie = { id, title, name, img, desc };

    const isFavorite = favorites.some((fav) => fav.id === id);

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="bg-amber-50 p-2 rounded-2xl border">
            <div className="text-center">
                <img src={`https://image.tmdb.org/t/p/w300/${img}`} alt={title || name} className='mx-auto' />
                <h1 className="text-3xl font-bold mt-3">
                    {title || name}
                </h1>

                <Button
                    className="bg-[#09f] text-white p-1.5 rounded cursor-pointer"
                    variant="primary"
                    onClick={() => setModalShow(true)}
                >
                    View Movie
                </Button>

                <button
                    onClick={() => isFavorite ? removeFavorite(id) : addFavorite(movie)}
                    className='btn btn-primary mx-2'
                >
                    {isFavorite ? <CiHeart fill='red' color='red' size={25} /> : <CiHeart size={25} />}
                </button>

                <Link to={`/details/${id}`} className='btn btn-primary'>
                    Details
                </Link>

                <CardModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title={title}
                    img={img}
                    desc={desc}
                />
            </div>
        </div>
    )
}
