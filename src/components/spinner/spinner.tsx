import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
font-size: 1em;
width: 5em;
height: 5em;
border-radius: 50%;
background: #ffffff;
background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
position: relative;
animation: load3 1.4s infinite linear;
transform: translateZ(0);
}
&:before {
width: 50%;
height: 50%;
background: #ffffff;
border-radius: 100% 0 0 0;
position: absolute;
top: 0;
left: 0;
content: '';
}
&:after {
background: rgb(32, 35, 41);
width: 75%;
height: 75%;
border-radius: 50%;
content: '';
margin: auto;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
}
@-webkit-keyframes load3 {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}
@keyframes load3 {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}`;
const Spinner = () => <StyledDiv data-testid="Spinner" />;

export default Spinner;
