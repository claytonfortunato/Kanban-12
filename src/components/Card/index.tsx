import * as C from "./styles";

interface CardProps {
  index: number;
  title: string;
  cardId: string;
  descript: string;
  tags: string[];
}

export const Card = ({ index, cardId, descript, tags, title }: CardProps) => {
  return (
    <C.Container>
      <h5>{title}</h5>
      <p>{descript}</p>
      <C.ContainerTags>
        <span>{tags}</span>
      </C.ContainerTags>
    </C.Container>
  );
};
