import React from 'react';
import Search from './components/search/Search'
import Detail from './components/detail/Detail'
import './App.css';

const App = () => {
  return (
    <div id="app" class="container">
      <div class="center">
        <h1>POKEDEX</h1>
      </div>
      <Search />
      <Detail />
    </div>
  );
}

export default App;
