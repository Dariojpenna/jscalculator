import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayFormula, setDisplayFormula] = useState('');
  const [displayOutput, setDisplayOutput] = useState('');

  const buttons = [
    {id: 'ac', text: 'AC'},{id: '/', text: '/'},{id: '*', text: '*'},{id: '7', text: '7'},{id: '8', text: '8'},{id: '9', text: '9'},{id: '-', text: '-'},{id: '6', text: '6'},{id: '5', text: '5'},{id: '4', text: '4'},{id: '+', text: '+'},{id: '3', text: '3'},{id: '2', text: '2'},{id: '1', text: '1'},{id: 'equals', text: '='},{id: 'zero', text: '0'},{id: '.', text: '.'}
  ]

  const handleButton = (e) => {
    switch (e.target.id) {
      case 'ac':
        setDisplayFormula('');
        setDisplayOutput('');
        break;
      case 'equals':
        setDisplayOutput(eval(displayFormula));
        break;
      case 'zero':
        setDisplayFormula(displayFormula + 0);
        break;
      default:
        setDisplayFormula(displayFormula + e.target.id);
        console.log(displayFormula);
    }

  }


  return (
    <div className="App">
      <div className='container'>
        <div className='displayFormula'>
          {displayFormula}
        </div>
        <div className='displayOutput'>
          {displayOutput}
        </div>
        <div className='buttons-box'>
          {buttons.map((button) => (
            <div className='button' 
              key={button.id} 
              id={button.id}
              onClick={handleButton}
            >
              {button.text}
            </div>
            ))}


        </div>

      </div>

    </div>
  );
}

export default App;
