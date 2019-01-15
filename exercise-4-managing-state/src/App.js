import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);
const number3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + number1 + number2 + number3;
const numQuestions=0;
function Displaylogo(){
  return(
<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>        
	</header>
  )
}
class Add_theNumberGame extends Component{
  render(){
  return(
    <div className="game">
          
    <h2>ADD THE NUMBERS GAME</h2>
    
    <div className="equation">
      <p className="text">{`${number1} + ${number2} + ${number3} = ${proposedAnswer}`}</p>
    </div>

    <button onClick={this.props.checkIfTrue}>True</button>
    <button onClick={this.props.checkIfFalse}>False</button>
    <p>Answer is {this.props.AnswerIsTrue}</p>
    <p className="text">
      You have answered {this.props.numCorrect} question answered correctly out of total {this.props.numQuestions} questions.
    </p>

  </div>
  )
}
}
class App extends Component {
  state={
    AnswerIsTrue:0,
    numCorrect:0,
    numQuestions:0
  }
  checkIfTrue=()=>{this.setState(
    (ps)=>(
      {
        numQuestions:this.state.numQuestions+1,
        numCorrect:(number1+number2===number3)?this.state.numCorrect+1:this.state.numCorrect-1
      }
    )
  )
    }
  checkIfFalse=()=>{this.setState(
    (ps)=>(
      {
        numQuestions:this.state.numQuestions+1,
        numCorrect:(number1+number2!==number3)?this.state.numCorrect+1:this.state.numCorrect-1
      }
    )
  )
}
  render() {
    return (

     
      
      <div className="App">
        <Displaylogo />
        <Add_theNumberGame numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect} AnswerIsTrue={this.state.AnswerIsTrue} checkIfTrue={this.checkIfTrue} checkIfFalse={this.checkIfFalse}/>
       
      </div>
    );
  }
}

export default App;

