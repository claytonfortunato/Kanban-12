import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow: auto;

  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  position: relative;
  overflow-y: auto;

  ::-webkit-scrollbar {
    height: 6px;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.gray03};
      border-radius: 999px;
    }
  }

  @media (min-width: 1024px) {
    gap: 4.8rem;
  }
`;
