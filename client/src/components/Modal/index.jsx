import React from "react";

const Modal = ({open}) => {
    if (!open) return null
    return (
    <div className='text-white font-bold'>MODAL</div>
    )
}

export default Modal