import React from 'react'

export const HomePage = () => {
    return (
        <>
            <section className='hero'>
                <div className='home-container'>

                    {/* <img src="./src/assets/home1.jpg" /> */}

                    <div className='home-description'>
                        <h1 className='home-tittle'>Buscabas calidad?</h1>
                        <p className='home-p'>Nos encontraste.</p>
                        <p className='home-p'>Importando las mejores marcas desde 2015</p>

                    </div>
                </div>
            </section>

            <section id='presentacion'>
                <div className='home-container-presentacion'>
                    <div className='image-container'></div>
                    <div className='presentacion-container'>
                        <h2 className='tittle-presentacion'>Quienes somos?</h2>
                        <p className='p-presentacion'>Somos una pequeña empresa que se dedica a la venta de calzados. Nos enfocamos en la cálidad de nuestros productos
                            como asi tambén en la atención a nuestros clientes. Contactate con nosotros!</p>
                    </div>

                </div>
            </section>

        </>
    )
}

