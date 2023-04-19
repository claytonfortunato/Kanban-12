import { Todo } from "../../@types/todos";
import { Card } from "../Card";

import * as C from "./styles";

interface CardsProps {
  cards: Todo[];
  boxId: string;
  title: string;
}

export const Cards = ({ cards, boxId, title }: CardsProps) => {
  return (
    <C.Container>
      <h3>{title}</h3>
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
    </C.Container>
  );
};
