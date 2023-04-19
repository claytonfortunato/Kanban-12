import styled from "styled-components";

export const Container = styled.div`
  width: 33rem;
  height: 153px;
  display: flex;
  flex-direction: column;
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

  h4 {
    width: 100%;
    color: ${(props) => props.theme.colors.brown02};
    font-size: 1.4rem;
    line-height: 130%;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    /* overflow: hidden;
    font-size: 1.4rem;
    white-space: pre-wrap;
    text-overflow: ellipsis; */

    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 1.4rem;
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
