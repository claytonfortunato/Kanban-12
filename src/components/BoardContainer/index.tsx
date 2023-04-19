import { useState } from "react";

import { Cards } from "../Cards";

import { todoStatus, todos } from "../../data/todoData";
import { getTodosByStatus } from "../../utils/getTodosByStatus";

import * as C from "./styles";

export const BoardContainer = () => {
  const [boardData, setBoard] = useState(getTodosByStatus(todos, todoStatus));

  return (
    <C.Container>
      {Object.keys(boardData).map((board) => (
        <Cards
          key={board}
          title={board}
          boxId={board}
          cards={boardData[board as keyof typeof boardData]}
        />
      ))}
    </C.Container>
  );
};
