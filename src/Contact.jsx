import React from 'react'

import { UseForm } from './hooks/useForm';


export const Contact = () => {

    const { onInputChange, onResetForm, nombre, apellido, mensaje, correo } = UseForm({
        nombre: '',
        apellido: '',
        mensaje: '',
        correo: '',

    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        alert("Gracias por tu mensaje!")
    }

    return (
        <>

            <div className='contact-container'>
                <div className='contact-hero'>
                    <h1>Contactanos</h1>
                </div>
            </div>


            <h4 className='form-tittle'>Envianos tu mensaje!</h4>
            <div className='contact-form '>
                <form onSubmit={onFormSubmit}>
                    <input
                        onChange={onInputChange}
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={nombre}


                    />

                    <input
                        onChange={onInputChange}
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        value={apellido}
                    />
                    <input
                        onChange={onInputChange}
                        type="email"
                        placeholder="alguien@ejemplo.com"
                        name="correo"
                        value={correo}

                    />
                    <input
                        onChange={onInputChange}
                        type="textarea"
                        placeholder="Tu mensaje"
                        name="mensaje"
                        value={mensaje}
                    />

                    <button onClick={onResetForm}
                    >Enviar

                    </button>
                </form>





            </div>

        </>
    )
}
