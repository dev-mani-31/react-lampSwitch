import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  left: ${(props) => (props.position === "left" ? "20px" : "380px")};
  height: 100px;
  background: ${(props) => (props.lampOn ? "orange" : "lightgrey")};
  top: 20px;
  border-radius: 50%;
  width: 100px;
  position: absolute;
`;

export default function Lamp({ lampOn, position }) {
  return (
    <Wrapper lampOn={lampOn} position={position}>
      <div />
    </Wrapper>
  );
}
