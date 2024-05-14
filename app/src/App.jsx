// App.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import MonsterDetails from './Components/MonsterDetails/MonsterDetails'
import { fetchMonsters, searchMonster } from './Components/MonsterService'; // Importando as funções do serviço
import { InputContext } from './Components/InputContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [monsterDetails, setMonsterDetails] = useState(null);
  const [error, setError] = useState('');
  const [startedTyping, setStartedTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchMonsters()
      .then(data => {
        setMonsters(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  const handleSearch = (value) => {
    setError('');
    setMonsterDetails(null);
    setInputValue(value);
    setStartedTyping(true);
    if (!value) {
      setSuggestions([]);
      return;
    }
    setSuggestions(monsters.filter(monster => monster.toLowerCase().startsWith(value)));
  };

  const handleSuggestionClick = (name) => {
    setInputValue(name.toLowerCase());
    setSuggestions([]);
    searchMonster(name.replace(/ /g, "-").toLowerCase())
      .then(data => {
        setMonsterDetails(data);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      <div className="container">
        <h1>Monster Search</h1>
        <SearchBar
          onSearch={handleSearch}
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
        <button onClick={() => {
          searchMonster(inputValue.replace(/ /g, "-").toLowerCase())
            .then(data => {
              setMonsterDetails(data);
            })
            .catch(err => {
              setError(err.message);
            });
            setInputValue('')
        }} style={{ marginTop: '10px'}}>Procurar</button>

        <MonsterDetails monsterDetails={monsterDetails} error={error} />
      </div>
    </InputContext.Provider>
  );
}

export default App;