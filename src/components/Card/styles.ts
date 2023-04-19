import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.brown};
  padding: 2.4rem;
  border-radius: 8px;
  line-height: 130%;
  box-shadow: 0px 4px 16px ${(props) => props.theme.colors.gray02};

  h3 {
    color: ${(props) => props.theme.colors.brown02};
    font-size: 1.4rem;
  }
`;

export const ContainerTags = styled.div``;
