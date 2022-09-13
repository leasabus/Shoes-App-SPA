import React from 'react'
import { HomePage } from './HomePage'
import { NavBar } from './NavBar'
import { Routes, Route } from 'react-router-dom';
import { Products } from './Products';
import { Contact } from './Contact';
import { Valorations } from './Valorations';
import { ShoesProducts } from './ShoesProducts';
import { ShoesList } from './ShoesList';

export const ShoesApp = () => {
    return (
        <>
            <NavBar></NavBar>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="shoeslist" element={<ShoesList />}></Route>
                <Route path='products/:productsName' element={<Products />} >
                    <Route path='details' element={<ShoesProducts />}></Route>
                </Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='valorations' element={<Valorations />}></Route>
                <Route path='*' element={<h1>Not found</h1>}></Route>
            </Routes>
        </>
    )
}
