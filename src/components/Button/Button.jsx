import React from 'react'
import './Button.css'

function Button({ children, type, className }) {

    return (
        <button 
            className={`button ${className}`}
            type={type}
        >
            { children }
        </button>
    )
}

export default Button
