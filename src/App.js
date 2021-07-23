import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent'

function App() {
const [search, setSearch] = useState("");
const [characterList, setCharacterList] = useState([]);

const handleSearch = (e) => {
  e.preventDefault();
  fetchCharacter(search)
}

const fetchCharacter = async (query) => {
  const res = await fetch(`
  https://api.jikan.moe/v3/search/character?q=${query}&limit=15
  `);
  const json = await res.json();
 
  console.log(json.results)
  setCharacterList(json.results);
}

  return (
    <div className="App">
      <h1>Biscuits</h1>
      <Header 
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <MainContent 
        characterList={characterList}
      />
    </div>
  );
}

export default App;
