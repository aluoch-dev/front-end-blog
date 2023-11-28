import React from "react";

const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 16px;
  padding: 8px;
  margin: 16px;
  background-color: ${props => props.bg === "black" ? "black" : "white"};
  color: ${props => props.bg === "black" ? "white" : "black"};
  `;

const Button = () => {
    return <StyledButton>Read More</StyledButton>
}

export default Button;