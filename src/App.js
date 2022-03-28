import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Pokemonpages from './pokemonpages';
function App() {
  return (
    <div>
      <Navbar />
      <Pokemonpages />
    </div>
  );
}
export default App;