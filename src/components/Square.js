// The square component renders a single button. Game is a child component. Board is the parent//
import React from 'react';
import '../App.css';

function Square(props){
  return (
    //We show that value (from Board class) with this.props.value//
    //With the onClick function, we fill the square component with an X//
    // The onClick prop on button components tells React to set up a click event listener//
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
