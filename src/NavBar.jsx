import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <header>
            <div className='container'>
                <span className='logo'>ShoesApp</span>
                <nav>
                    <li><NavLink className="navlink "
                        to="/">Home</NavLink>
                    </li>
                    <li><NavLink className="navlink" to="shoeslist">Products</NavLink></li>
                    <li><NavLink className="navlink" to="contact">Contact</NavLink></li>
                    <li><NavLink className="navlink" to="valorations">Valorations</NavLink></li>
                </nav>
            </div>

        </header >
    )
}
