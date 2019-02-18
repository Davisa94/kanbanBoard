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
   rightButton: 'FALSE'
  },
  {
    leftButton: 'TRUE',
    text: 'Second Card',
    rightButton: 'FALSE'
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
  renderCard(card){
    if(card.leftButton=="TRUE" && card.rightButton=="FALSE")
    {
      return <div className="card" key={card.text}><button class = "card-button" type="button" name="button">L</button>{card.leftButton}{card.text}</div>
    }
    else{
      return <div className="card" key={card.text}>{card.text}</div>
    };

  }

  render(){
    const listItems = cards.map((card)=> this.renderCard(card));
    
    
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
