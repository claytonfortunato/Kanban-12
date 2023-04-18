import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerKanban = styled.div`
  flex: 1;
  display: grid;
  gap: 3.2rem;
  grid-template-rows: max-content max-content 1fr;
  height: calc(100vh - 0.4rem);
  background: ${(props) => props.theme.colors.gray04};
  margin-top: 0.4rem;
  padding: 4.8rem 3.2rem 0 3.2rem;
  border-top-left-radius: 32px;
`;
