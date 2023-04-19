import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4rem;

  svg {
    color: ${(props) => props.theme.colors.gray01};
    font-size: 2.4rem;
    cursor: pointer;
    transition: all ease-in 0.2s;

    &:hover {
      scale: 1.2;
    }
  }

  h1 {
    color: ${(props) => props.theme.colors.brown};
    line-height: 130%;
    font-size: 3.2rem;
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
