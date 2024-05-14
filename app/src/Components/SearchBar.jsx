import React, { useState, useEffect, useContext, useCallback } from 'react';
import { InputContext } from './InputContext';
import _ from 'lodash';


const SearchBar = ({ onSearch, suggestions, onSuggestionClick }) => {
  const {inputValue, setInputValue} = useContext(InputContext);

  const handleInputChange = useCallback((event) => {
    const value = event.target.value.toLowerCase();
    console.log(value)
    setInputValue(value);
    onSearch(value);
  }, [setInputValue, onSearch]);
  
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value.toLowerCase();
      setInputValue(value);
      onSuggestionClick(inputValue);
      console.log(value);
    }
  }

  const debouncedSearch = useCallback(_.debounce(onSearch, 300), [onSearch]);
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