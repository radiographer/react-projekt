import React, { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import Pagination from "./components/Pagination";
import styled from "styled-components";

const List = styled.button`
  padding-top: 200px;
  padding-bottom: 100px;
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

  useEffect(() => {
    const url = currentPageUrl;
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
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

  function goToPage(num) {
    setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`);
  }
  if (loading) return "Loading...";

  const charList = characters.map((char) => (
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
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
        goToPage={goToPage}
        pages={pages}
      />
      <div className="char-cards">{charList}</div>
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
