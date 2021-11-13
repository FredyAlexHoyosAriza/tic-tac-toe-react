// Entre llaves se tienen los hoooks que se usan en los functional components
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  // al ser const renderSquare siempre sera igual a su funcion flecha
  const renderSquare = (i) => {
    // Para cada square se llamaria a this.handleClick(i) con una i respectiva
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function GameF(props) {

  // Los siguiente 3 llamados al hook useState ejecutan el equivalente al llamado del
  // constructor en el mismo componente pero tipo clase.
  // useState retorna 2 propidades una es el estado en si la otra en la funcion (hook)
  // que hace modificar ese estado.
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    // Se copia history desde la posicion 0 hasta la posicion (stepNumber + 1) - 1
    const auxHistory = history.slice(0, stepNumber + 1);
    const current = auxHistory[auxHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    // Para que el estado history cambie es necesario que se clickee un cuadro del triqui
    // y que el arreglo en la posicion del history actual no tenga un winner o que la
    // posicion clickeada tenga un valor en el array (o registro) actual diferente de null
    setHistory(
      [...auxHistory, { squares: squares }]
      // auxHistory.concat([{ squares: squares }])
    );
    setStepNumber(auxHistory.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step) => {
    // Aqui se puede ver que el estado history no cambia, si solo se clickea
    // uno de los botones de movimientos guardados en el estado history
    setStepNumber(step);
    // En base a stepNumber se actualiza el valor de xIsNext
    // Si step es impar acaba de jugar X, por ende, xIsNext = false
    setXIsNext((step % 2) === 0)
  }

  // const history = this.state.history;
  // El tablero actual (que se muestra) es el indicado por stepNumberr
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  // moves sera un array de elementos de tipo lista, cada uno
  // conteniendo un boton para ir a un determinado # de movimiento
  const moves = history.map((step, move) => {
    // move = true si move != 0. Aqui se indica el # de movimientos
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      // Los ciclos requieren una llave unica
      // Olvidar () => y escribir onClick={jumpTo(move)} es un error común,
      // y jumpTo se ejecutaría cada vez que el componente se re-renderice.
      <li key={move}>
        {/* Se selecciona un nuevo valor para el stepNumber */}
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status = ''; // Es buena practica inicializar las variables
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={ current.squares }
          // onClick={ (i) => handleClick(i) }
          // la anterior linea es equivalente a la siguiente
          onClick={ handleClick }
        />
      </div>
      <div className="game-info">
        <div>{ status }</div>
        <ol>{ moves }</ol>
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <GameF />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // squares[a] = true, si squares[a] != null
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}