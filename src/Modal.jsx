import { FaWindowClose } from 'react-icons/fa'

export const Modal = ({ children, state, changeState }) => {

    const onCloseModal = () => {
        changeState(false);
    }
    return (
        <>
            {/* aca hay q usar una expresion para preguntar si hay un estado y es verdadero, q
        muestre lo que hay dentro, en este caso si cambio el estado a true se muestra, si no no */}
            {state &&
                <div className="modal">
                    <div className="modal-container">

                        <button
                            onClick={onCloseModal}
                            className="modal-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </button>
                        {children}

                    </div>
                </div>
            }
        </>
    )
}
