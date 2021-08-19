// import React, { useState, useEffect } from "react";
// import ListaPostaci from "./components/ListaPostaci";

// function App() {
//   const [postaci, setPostaci] = useState(null);

//   useEffect(() => {
//     fetch("https://rickandmortyapi.com/api/character")
//       .then((response) => response.json())
//       .then(setPostaci);
//   }, []);

//   if (!postaci) {
//     return <div className="App">Brak danych z backandu</div>;
//   }
//   return (
//     <div className="App">
//       <ListaPostaci postaci={postaci} />
//     </div>
//   );
// }

// export default App;

import "../App.css";
import React, { useState, useEffect } from "react";
import Character from "./components/Character";
import Pagination from "./components/Pagination";
import styled from "styled-components";

const Container = styled.div`
  background-color: #dbf1ee;
  margin-top: 200;
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
    <Character
      key={Math.floor(Math.random() * 10000)}
      name={char.name}
      img={char.image}
    />
  ));

  return (
    <Container>
      <div className="char-cards">{charList}</div>
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
        goToPage={goToPage}
        pages={pages}
      />
    </Container>
  );
}

export default App;
