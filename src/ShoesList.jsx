import React from 'react'
import { useState } from 'react';
import { Modal } from './Modal';

export const ShoesList = () => {
    const shoes = [
        'Vans',
        'Adidas',
        'Nike',
        'Puma',
        'Reebok'
    ]

    const [state1, changeState1] = useState(false);
    const [state2, changeState2] = useState(false);
    const [state3, changeState3] = useState(false);
    const [state4, changeState4] = useState(false);
    const [state5, changeState5] = useState(false);


    const onChangeButton1 = () => {
        // invertimos el estado del state1
        changeState1(!state1)

    }

    const onChangeButton2 = () => changeState2(!state2)
    const onChangeButton3 = () => changeState3(!state3)
    const onChangeButton4 = () => changeState4(!state4)
    const onChangeButton5 = () => changeState5(!state5)


    return (
        <>
            <h2 className='shoes-tittle' >Products</h2>
            <div className='shoes-container'>
                <Modal
                    // le aplicamos los dos estados para poder cambiarlos y pasarlos como parametro al modal
                    state={state1}
                    changeState={changeState1}
                >
                    <div className='modal-display1 animate__animated animate__fadeInLeft'>
                    </div>
                    <div className='modal-items '>
                        <h4>Vans classic</h4>
                        <p>Las de siempre, las de todos los días.</p>
                    </div>

                </Modal>

                <Modal
                    // le aplicamos los dos estados para poder cambiarlos y pasarlos como parametro al modal
                    state={state2}
                    changeState={changeState2}

                >
                    <div className='modal-display2 animate__animated animate__fadeInRight'>

                    </div>
                    <div className='modal-items'>
                        <h4 >Adidas superstar limited edition</h4>
                        <p>Cómodas y livianas, para tu día a día y
                            tambien porque no para algo mas formal.
                        </p>
                    </div>
                </Modal>

                <Modal
                    // le aplicamos los dos estados para poder cambiarlos y pasarlos como parametro al modal
                    state={state3}
                    changeState={changeState3}
                >
                    <div className='modal-display3 animate__animated animate__fadeInLeft'>
                    </div>
                    <div className='modal-items'>
                        <h4>Nike Air Force Brown</h4>
                        <p>Un toque de elegancia a las clasicas
                            Air Force.
                        </p>
                    </div>
                </Modal>

                <Modal
                    // le aplicamos los dos estados para poder cambiarlos y pasarlos como parametro al modal
                    state={state4}
                    changeState={changeState4}
                >
                    <div className='modal-display4 animate__animated animate__fadeInRight'>
                    </div>
                    <div className='modal-items'>
                        <h4>Puma Basket Classic</h4>
                        <p>Cómodas y resistentes, para un outfit casual.</p>
                    </div>
                </Modal>

                <Modal
                    // le aplicamos los dos estados para poder cambiarlos y pasarlos como parametro al modal
                    state={state5}
                    changeState={changeState5}
                >
                    <div className='modal-display5 animate__animated animate__fadeInLeft'>
                    </div>
                    <div className='modal-items'>
                        <h4>Reebok Classic Leather</h4>
                        <p >Muy elegantes, se adaptan a cualquier estilo.</p>
                    </div>
                </Modal>




                <div className='shoes-list'>
                    {/* {
                        shoes.map(shoes => ( */}
                    {/* )) */}
                    {/* } */}
                    <button onClick={onChangeButton1}
                        key={shoes.id}>
                        {shoes[0]}
                    </button>
                    <button onClick={onChangeButton2}
                        key={shoes.id}>
                        {shoes[1]}
                    </button>

                    <button onClick={onChangeButton3}
                        key={shoes.id}>
                        {shoes[2]}
                    </button>

                    <button onClick={onChangeButton4}
                        key={shoes.id}>
                        {shoes[3]}
                    </button>

                    <button onClick={onChangeButton5}
                        key={shoes.id}>
                        {shoes[4]}
                    </button>



                </div>
            </div>

        </>
    )
}
