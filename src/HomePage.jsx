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
                        <p className='p-presentacion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit maxime deleniti natus iusto repudiandae inventore, in saepe officiis mollitia labore illo magnam similique itaque ex eaque! Provident, reprehenderit libero.</p>
                    </div>

                </div>
            </section>

        </>
    )
}

