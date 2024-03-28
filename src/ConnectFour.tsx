import './ConnectFour.css';
import GameBoard from 'src/BoardComponent';
import React from 'react';

const App: React.FunctionComponent = ():JSX.Element => {

  return (
    <div>
      <h1>Connect Four Local 2-Player Game</h1>
      <GameBoard/>
    </div>
  );
}

export default App;
