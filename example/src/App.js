import React from 'react';
import './App.css';
import { useReactFormElement } from 'react-form-element-hook';

function App() {

  const [ ref, value, isValid ] = useReactFormElement('first-name');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            ref={ref} 
            style={{
              border: isValid ? '1px solid blue' : '1px solid red'
            }}
            required
            pattern="[0-9]+"
          />
        </form>
      </header>
    </div>
  );
}

export default App;
