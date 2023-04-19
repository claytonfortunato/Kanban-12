import { Draggable } from "react-beautiful-dnd";

import * as C from "./styles";

interface CardProps {
  index: number;
  title: string;
  cardId: string;
  descript: string;
  tags: string[];
}

export function Card({ index, cardId, descript, tags, title }: CardProps) {
  return (
    <Draggable draggableId={cardId} index={index}>
      {(provided, snapshot) => (
        <C.Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <h4>{title}</h4>
          <p>{descript}</p>
          <C.ContainerTags isDragging={snapshot.isDragging}>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </C.ContainerTags>
        </C.Container>
      )}
    </Draggable>
  );
}
