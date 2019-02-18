import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Card extends Component{
  text = "default text";
  leftButton = "L";
  rightButton = "R";
  render(){
    return (
      <div className="card">
        {this.props.leftButton} {this.props.text} {this.props.rightButton}
      </div>

    )
  } 

}


var cards = [
  {
   leftButton: 'TRUE',
   text: 'First Card',
   rightButton: 'R'
  },
  {
    leftButton: 'L',
    text: 'Second Card',
    rightButton: 'R'
   },
   {
    leftButton: 'L',
    text: 'Third Card',
    rightButton: 'R'
   },
   {
    leftButton: 'L',
    text: 'Fourth Card',
    rightButton: 'R'
   },
     
];

class Board extends Component {
  constructor(classN="column"){
    super();
    var classname = classN;
  }

  render(){
    const listItems = cards.map((card)=>
    <div className="card" key={card.text}>if(card.leftButton == "TRUE"){<button class = "card-button" type="button" name="button"><</button></button>};{card.leftButton}{card.text}</div>);
    return(
      <div className="column">
        {listItems}
      </div>
    )
  }
}

var boards =
[
  {
    classname: "column green"
  },
  {
    classname: "column green"
  }
]


class mainBoard extends Component {

  render(){
    const listItems = boards.map((board)=>
    <Board className={board.classname}></Board>);
    return(
      <div className="main">
        <h1>Test</h1>
        {listItems}
      </div>
    )
  }

}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
        <mainBoard></mainBoard>
        <Board className="column green"></Board>
        </div>
      </div>
    );
  }
}

export default App;
