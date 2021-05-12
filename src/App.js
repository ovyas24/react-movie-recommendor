import React from 'react';
import './App.css';
import Header from './Header';
import SearchFilter from './Components/SearchFilter/SearchFilter';
import Recommendations from './Components/Recommendations/Recommendations';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchFilter />
      <Recommendations />
    </div>
  );
}

export default App;
