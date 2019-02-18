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
   leftButton: '<button class = "card-button" type="button" name="button"><</button>',
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
    var classname = classN;
  }

  render(){
    const listItems = cards.map((card)=>
    <div className="card" key={card.text}>{card.text}</div>);
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
    board: new Board("column green")
  },
  {
    board: new Board("column blue")
  }
]


class mainBoard extends Component {

  render(){
    const listItems = boards.map((board)=>
    <div className={board.props.classname}></div>);
    return(
      <div className="main">
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
        </div>
      </div>
    );
  }
}

export default App;
