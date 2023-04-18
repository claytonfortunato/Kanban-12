import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4rem;

  h1 {
    color: ${(props) => props.theme.colors.brown};
    line-height: 130%;
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
