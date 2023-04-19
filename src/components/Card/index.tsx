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
      <h3>{title}</h3>
      <p>{descript}</p>
      <C.ContainerTags>
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </C.ContainerTags>
    </C.Container>
  );
};
