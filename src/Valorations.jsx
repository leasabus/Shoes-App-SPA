import React from 'react'

export const Valorations = () => {
    return (
        <>
            <h1 className='valorations-tittle'>Nuestros Clientes</h1>
            <section id='valorations'>
                <div className='valorations-container'>
                    <div className='valorations-cards'>
                        <ul className='slider'>
                            <li id='slide1' > <img src="src/assets/slider1.jpg" alt="" className='animate__animated animate__bounceInLeft' />

                            </li>
                            <li id='slide2'  > <img src="src/assets/slider2.jpg" alt="" />
                                <p>"Excelente servicio y atencions" @leodiaz14</p>
                            </li>
                            <li id='slide3'> <img src="src/assets/slider3.jpg" alt="" />
                                <p>"Buena puntualidad con las entregas" @marcos_alonso</p>
                            </li>
                            <li id='slide4'><img src="src/assets/slider4.jpg" alt="" />
                                <p>"Muy buenos productos y rápida entrega!" @fernanda14</p>
                            </li>


                        </ul>
                    </div>

                    <ul className='slider-menu animate__animated animate__bounceInUp '>
                        <li><a href="#slide1">1</a></li>
                        <li><a href="#slide2">2</a></li>
                        <li><a href="#slide3">3</a></li>
                        <li><a href="#slide4">4</a></li>
                    </ul>
                </div>

            </section>
        </>
    )
}
