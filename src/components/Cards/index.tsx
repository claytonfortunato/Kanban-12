import { Todo } from "../../@types/todos";
import { Card } from "../Card";
import { Droppable } from "react-beautiful-dnd";

import * as C from "./styles";

interface CardsProps {
  cards: Todo[];
  boxId: string;
  title: string;
}

export function Cards({ cards, boxId, title }: CardsProps) {
  return (
    <C.CardsWrapper>
      <h2>{title}</h2>
      <Droppable droppableId={boxId}>
        {(provided) => (
          <C.Container ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Card
                key={card.id}
                cardId={card.id.toString()}
                descript={card.description}
                tags={card.tags}
                title={card.title}
                index={index}
              />
            ))}
            {provided.placeholder}
          </C.Container>
        )}
      </Droppable>
    </C.CardsWrapper>
  );
}
