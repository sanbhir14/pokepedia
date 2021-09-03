import React from 'react';
import Main from './components/MainComponent.js';
import {BrowserRouter} from 'react-router-dom';
import {AppWrap} from './AppStyles';


function App() {
  return (
    
    <AppWrap>
    <div className="App">
      <BrowserRouter>
      <Main/>
      </BrowserRouter>    
    </div>
    </AppWrap>
  );
}

export default App;
