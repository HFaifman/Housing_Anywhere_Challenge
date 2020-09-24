import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1em;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
  color: rgb(0, 0, 0);
  background: rgb(135, 206, 250);
  &:hover {
    background: rgb(220, 220, 220);
  }
`;
const Button = (props: { [x: string]: any; text: string }) => {
  const { text, ...rest } = props;

  return (
    <StyledButton type="submit" {...rest}>
      {text}
    </StyledButton>
  );
};
export default Button;
