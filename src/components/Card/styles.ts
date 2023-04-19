import styled from "styled-components";

export const Container = styled.div`
  width: 320.33px;
  height: 153px;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.brown};
  padding: 2.4rem;
  border-radius: 8px;
  line-height: 130%;
  box-shadow: 0px 4px 16px ${(props) => props.theme.colors.gray02};
  cursor: pointer;
  transition: all ease-in 0.2s;

  &:hover {
    scale: 1.05;
  }

  h3 {
    color: ${(props) => props.theme.colors.brown02};
    font-size: 1.4rem;
  }

  p {
    overflow: hidden;
    font-size: 1.4rem;
    white-space: pre-wrap;
    text-overflow: ellipsis;
  }
`;

export const ContainerTags = styled.div`
  display: flex;
  gap: 0.8rem;

  span {
    background: ${(props) => props.theme.colors.purple02};
    color: ${(props) => props.theme.colors.purple01};
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;
