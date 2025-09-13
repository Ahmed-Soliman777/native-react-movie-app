import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#ea0000] py-15 px-50 text-white flex justify-between gap-20'>
            <div className="childe">
                <i class="fa-solid fa-box-open text-5xl"></i>
                <h2 className='text-3xl font-bold capitalize my-5'>free shipping method</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, inventore.</p>
            </div>
            <div className="childe">
                <i class="fa-solid fa-lock text-5xl"></i>
                <h2 className='text-3xl font-bold capitalize my-5'>secure payment method</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, inventore.</p>
            </div>
            <div className="childe">
                <i class="fa-solid fa-arrows-spin text-5xl"></i>
                <h2 className='text-3xl font-bold capitalize my-5'>secure payment system</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, inventore.</p>
            </div>
        </div>
    )
}
