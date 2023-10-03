import React from "react";
import { useEffect, useState } from 'react';
export default function Search() { 
    
        const [inputValue, setInputValue] = useState('');

        const handleInputChange = (event) => {
          setInputValue(event.target.value);
        };
      
        return (
          <div>
            <label htmlFor="inputField">Enter your name:</label>
            <input 
              type="text" 
              id="inputField" 
              value={inputValue} 
              onChange={handleInputChange} 
              placeholder="John Doe"
            />
            <p>You typed: {inputValue}</p>
          </div>
        );
    
}