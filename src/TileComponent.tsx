import React, { useState, useEffect } from "react";
import { Column } from "./ColumnComponent";

interface Props {
  columnIndex: number;
  column: Column;
  updateBoard: (columnIndex: number) => void;
}

const Tile: React.FunctionComponent<Props> = ({
  columnIndex,
  updateBoard,
  column,
}: Props): JSX.Element => {
  const [isFalling, setIsFalling] = useState(false);
  
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (column.player !== null && !isFalling) {
      setAnimationKey(prevKey => prevKey + 1);
      setIsFalling(true);
      setTimeout(() => {
        setIsFalling(false);
      }, 500); 
    }
  }, [column.player]);

  let tileClass = "open";
  if (column.player === 1) {
    tileClass = "player1";
  } else if (column.player === 2) {
    tileClass = "player2";
  }

  const style = isFalling
    ? { transform: `translateY(-750%)` }
    : {};

  return (
    <td>
      <div className="tile" onClick={() => updateBoard(columnIndex)}>
        <div key={animationKey} className={`circle ${tileClass}`} style={style}></div>
      </div>
    </td>
  );
};

export default Tile;
