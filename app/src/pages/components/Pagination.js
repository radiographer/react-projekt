import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Pagination = ({ nextPage, prevPage, goToPage, pages, num }) => {
  let pageButtons = [];
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(
      <button key={i} onClick={() => goToPage(i)}>
        {i}
      </button>
    );
  }
  return (
    <Buttons>
      {prevPage && <button onClick={prevPage}>Previous</button>}
      {pageButtons}
      {nextPage && <button onClick={nextPage}>Next</button>}
    </Buttons>
  );
};
export default Pagination;
