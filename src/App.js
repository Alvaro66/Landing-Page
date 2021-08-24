import React from "react";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Jumbotron from './components/Jumbotron';
import Carousel from './components/Carousel';


function App() {
  return (
    <div>
      <header className="App-header"></header>
      <Navbar />
      <div className="Landing-container">
        <Jumbotron />
        <Carousel />
        <Cards />
      </div>
    </div>
  );
};
export default App



