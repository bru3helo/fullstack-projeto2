import React, { useState, useEffect, useContext } from 'react';
import { InputContext } from './InputContext';


const SearchBar = ({ onSearch, suggestions, onSuggestionClick }) => {
  const {inputValue, setInputValue} = useContext(InputContext);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    console.log(value)
    setInputValue(value);
    onSearch(value);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value.toLowerCase();
      setInputValue(value);
      onSuggestionClick(inputValue);
      console.log(value);
    }
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite o nome do monstro"
        onKeyPress={handleKeyPress}
      />
      <div className='mt-2'>
        {suggestions.map(suggestion => (
          <button 
          key={suggestion} 
          onClick={() => {
            onSuggestionClick(suggestion);
            setInputValue('');
          }} 
          style={{ marginRight: '10px', marginTop: '2px' }}
        >
          {suggestion}
        </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;