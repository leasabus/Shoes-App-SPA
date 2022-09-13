import React from 'react'
import { useState } from 'react';


export const Contact = () => {

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        mensaje: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset()

    }

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;


        const newValues = {
            ...form,
            [name]: value,

        }
        setForm(newValues);
    }

    const onResetForm = () => {
        setForm(' ')
    }




    return (
        <>

            <div className='contact-container'>
                <div className='contact-hero'>
                    <h1>Contactanos</h1>
                </div>
            </div>


            <h4 className='form-tittle'>Envianos tu mensaje!</h4>
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        placeholder="Nombre"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        value={form.apellido}
                        onChange={handleChange}
                    />
                    <input type="email"
                        placeholder="alguien@ejemplo.com"
                        value={form.correo}
                        name="correo"
                        onChange={handleChange}

                    />
                    <input
                        type="textarea"
                        placeholder="Tu mensaje"
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                    />

                    <button
                        onClick={onResetForm}
                    >Enviar

                    </button>




                </form>
            </div>

        </>
    )
}
