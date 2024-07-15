import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
    // revisamods todos las combinaciones ganadoras
    // para ver si X u O ganan
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if(
        boardToCheck[a] && // 0 -> x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]; // x u o
      }
    }
    // si no hay ganador
    return null;
}


export const checkEndGame = (newBoard) => {
    // revisamos si hay empate
    // si no hay más espacios
    // en el tablero
    return newBoard.every((square) => square != null);
}