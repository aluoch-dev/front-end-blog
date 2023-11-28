import React from "react";

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