import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-size: 40px;
`;

function About(props) {
  // const [value, setValue] = useState(defaultValue);

  // useEffect(() => {});

  const value = { text: "Cześć to ja! Rick" };

  return <Container>{value.text}</Container>;
}

export default About;
