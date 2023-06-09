import styled from "styled-components";

export const Container = styled.aside`
  padding: 3.2rem 2.7rem 0 3.5rem;
`;

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  max-width: 11.4rem;
  width: 100%;
  padding-top: 6rem;

  @media (max-width: 672px) {
    align-items: center;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    font-size: 18px;
    line-height: 125%;

    text-decoration: none;
    font-weight: 500;

    color: ${(props) => props.theme.colors.purple02};

    transition: all ease-in-out 0.2s;

    &.active,
    &:hover {
      color: ${(props) => props.theme.colors.white};
      font-weight: 700;
    }

    @media (max-width: 672px) {
      span {
        display: none;
      }
    }
  }
`;
