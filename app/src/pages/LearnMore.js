import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
const Container = styled.div`
  background-color: #dbf1ee;

  min-height: 80vh;
  font-size: 40px;
  padding-left: 20vw;
  padding-right: 20vw;
`;

function LearnMore() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { name, id } = useParams();

  return (
    <Container>
      <h3>{("name", { name }, "id", { id })}</h3>
    </Container>
  );
}

export default LearnMore;
