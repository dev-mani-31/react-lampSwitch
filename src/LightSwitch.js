import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  left: ${(props) => (props.name === "left" ? "20px" : "380px")};
  bottom: 20px;
  bakcground: ;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

export default function LightSwitch(props) {
  return (
    <Button name={props.name} onClick={props.callback}>
      {props.switchOn ? "On" : "Off"}
    </Button>
  );
}
