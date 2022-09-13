import React from 'react'
import { useParams, Outlet, Link } from 'react-router-dom';

export const ShoesProducts = () => {
    const { productsName } = useParams();
    return (
        <>
            <div className='products-container'>
                <h2 className='shoes'>ShoesProducts</h2>
                {productsName}
                <Link to="details">Go to details</Link>
                <Outlet></Outlet>
                {/* investigar como mostrar los productos x marca */}
            </div>
        </>
    )
}
