import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #dbf1ee;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

function Counter({ defaultValue = 0, step = 1 }) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {});

  const onMinus = (e) => {
    setValue(value - step);
  };

  const onPlus = (e) => {
    setValue(value + step);
  };
  return (
    <Container>
      <button onClick={onMinus}>-</button>
      {value}
      <button onClick={onPlus}>+</button>
    </Container>
  );
}

export default Counter;
