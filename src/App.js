import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [search, setSearch] = useState("");
  const [characterList, setCharacterList] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCharacter(search);
  };

  const fetchCharacter = async (query) => {
    setIsLoading(true);
    const res = await fetch(`
  https://api.jikan.moe/v3/search/character?q=${query}&limit=15
  `);
    const json = await res.json();

    console.log(json.results);
    setCharacterList(json.results);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>Biscuits</h1>
      <Header
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <MainContent characterList={characterList} />
      )}
    </div>
  );
}

export default App;
