import { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [monsterDetails, setMonsterDetails] = useState(null);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters")
      .then(res => res.json())
      .then(data => {
        setMonsters(data.results.map(monster => monster.name));
      })
      .catch(err => {
        console.error("Failed to fetch monsters", err);
        setError("Failed to load monster data.");
      });
  }, []);
  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);
    if (!value) {
      setFilteredMonsters([]);
      return;
    }
    setFilteredMonsters(monsters.filter(monster => monster.toLowerCase().startsWith(value)));
  };

  const handleClick = (name) => {
    setInputValue(name);
    setFilteredMonsters([]);
  };

  const searchMonster = () => {
    if (!inputValue) {
      setError("Por favor, insira o nome de um monstro.");
      setMonsterDetails(null);
      return;
    }
    setError("Procurando...");
    setMonsterDetails(null);
    const monsterName = inputValue.replace(/ /g, "-");

    fetch(`https://www.dnd5eapi.co/api/monsters/${monsterName}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError("Monstro não encontrado.");
          setMonsterDetails(null);
        } else {
          setError('');
          setMonsterDetails({
            name: data.name,
            type: data.type,
            size: data.size,
            languages: data.languages,
            alignment: data.alignment
          });
        }
      })
      .catch(() => {
        setError("Ocorreu um erro na busca.");
        setMonsterDetails(null);
      });
  };

  }
  export default App;