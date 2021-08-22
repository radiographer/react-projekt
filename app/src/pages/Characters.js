import React, { useState, useEffect } from "react";

import styled from "styled-components";

import CharacterCard from "./components/CharacterCard";
import Pagination from "./components/Pagination";
import CurrentPageInfo from "./components/CurrentPageNumber";
import SelectInput from "./components/SelectInput";
import SwitchAZ from "./components/SwitchAZ";

const List = styled.button`
  padding-top: 200px;
  padding-bottom: 100px;
`;

const CharCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );

  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);
  const [statusFromSelectInput, setStatusFromSelectInput] = useState(null);

  useEffect(() => {
    const url = currentPageUrl;
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data);
      setCharacters(data.results);

      setLoading(false);
      setNextPageUrl(data.info.next);
      setPrevPageUrl(data.info.prev);
      setPages(data.info.pages);
    };
    fetchData();
  }, [currentPageUrl]);

  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function prevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  function goToPage(page) {
    setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${page}`);
    setPage(page);
  }
  if (loading) return "Loading...";

  const charList = characters
    .filter((char) => {
      return statusFromSelectInput == null
        ? true
        : statusFromSelectInput == char.status;
    })
    .map((char) => (
      <CharacterCard
        key={Math.floor(Math.random() * 10000)}
        name={char.name}
        img={char.image}
        species={char.species}
        status={char.status}
      />
    ));

  return (
    <List>
      <SwitchAZ />
      <SelectInput
        status={statusFromSelectInput}
        handleStatus={setStatusFromSelectInput}
      />
      <CurrentPageInfo page={page} />
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
        goToPage={goToPage}
        pages={pages}
      />
      <CharCards>{charList}</CharCards>
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
        goToPage={goToPage}
        pages={pages}
      />
    </List>
  );
}

export default App;
