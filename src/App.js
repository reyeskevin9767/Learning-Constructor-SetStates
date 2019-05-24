import React, {Component} from 'react';
import Game from './Game';
// import Game2 from './Game2';
import Rando from './Rando';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
    <Game color="purple"/>
    <Rando maxNum={7}/>
    {/* <Game2 animal="Bobcar" food="Pineapple" /> */}
    </div>
  );
  }
}

export default App;
