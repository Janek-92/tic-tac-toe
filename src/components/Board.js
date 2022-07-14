//The board component renders 9 squares. It is the parent component//
import React from 'react';
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    // We are passing data through property "value". This is how information flows, through props. It´s a prop passing mechanism//
    //With this.props.squares we instruct each square about it`s value: X. O, or null//
    // With this.handleClick we pass a function from Board to Square, and we have Square call that function.//
    return (
      <Square
         value={this.props.squares[i]}
         onClick={() => this.props.onClick(i)}
      />
    );
  }

  render () {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
