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


  }
  export default App;