import styled from "styled-components";

export const Container = styled.aside`
  padding: 3.2rem 2.7rem 0 3.5rem;
`;

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 11.4rem;
  padding-top: 6rem;

  .menu-item {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    font-size: 16px;
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
  }
`;
