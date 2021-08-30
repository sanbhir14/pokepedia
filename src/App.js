import React from 'react';
import Main from './components/MainComponent.js';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
