import React from "react";
import styled from "styled-components";
import Lamp from "./Lamp";
import LightSwitch from "./LightSwitch";

const Room = styled.div`
  position: relative;
  height: 500px;
  widht: 500px;
  border: 5px solid black;
  margin: 0 auto;
`;

function App() {
  const [isLampOneOn, setIsLampOneOn] = React.useState(true);
  const [isLampTwoOn, setIsLampTwoOn] = React.useState(true);

  const handleLightSwitchOne = () => setIsLampOneOn((prev) => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn((prev) => !prev);

  return (
    <Room>
      <Lamp lampOn={isLampOneOn} position="left" />
      <Lamp lampOn={isLampTwoOn} position="right" />
      <LightSwitch
        name="left"
        callback={handleLightSwitchOne}
        switchOn={isLampOneOn}
      />
      <LightSwitch
        name="right"
        callback={handleLightSwitchTwo}
        switchOn={isLampTwoOn}
      />
    </Room>
  );
}

export default App;
