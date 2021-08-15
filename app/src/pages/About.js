import React from "react";
import styled from "styled-components";
import rickImage from "./images/rick.png";

const AboutImage = styled.div`
  height: 30px;
  width: 30px;
`;
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

  const value = { text: "Hi, it's me Rick!" };

  return (
    <Container>
      <AboutImage src={rickImage} />
      {value.text}
    </Container>
  );
}

export default About;
