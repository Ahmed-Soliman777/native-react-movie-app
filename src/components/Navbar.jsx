import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FavoritesContext } from './Context'

export default function Navbar() {
    const { favorites } = useContext(FavoritesContext)
    return (
        <div className="bg-amber-100">
            <div className='flex  py-2 mx-10 items-center '>
                <h1 className='me-10 font-bold text-2xl'>iTi <span className='text-red-500'>Zone</span></h1>
                <ul className="flex m-0">
                    <li className="mx-3">
                        <NavLink className="text-black decoration-none" to="/">Home</NavLink>
                    </li>
                    <li className="mx-3">
                        <NavLink className="text-black decoration-none" to="/about">About</NavLink>
                    </li>
                    <li className="mx-3">
                        <NavLink className="text-black decoration-none" to="/contact">Contact</NavLink>
                    </li>
                    <li className="mx-3">
                        <NavLink className="text-black decoration-none" to="/favorites">
                            Favorites{" "}
                            <span className="m-1.5 bg-red-500 p-2 rounded-2xl text-white">
                                {favorites.length}
                            </span>
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div>
    )
}
