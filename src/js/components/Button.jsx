import React from "react";
import styled from 'styled-components'

const Button = ({text, onClick}) => {
    return(
        <button 
        type="button"
        className="button-class"
        onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;