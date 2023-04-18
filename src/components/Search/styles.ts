import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0 2.4rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: ${(props) => props.theme.colors.purple01};
    color: ${(props) => props.theme.colors.white};
    padding: 1.2rem 3.2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.4rem;
    line-height: 2.4rem;
    cursor: pointer;
    transition: all ease-in 0.4s;

    &:hover {
      background-color: ${(props) => props.theme.colors.purple03};
      color: ${(props) => props.theme.colors.purple01};
    }
  }

  svg {
    font-size: 2.4rem;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  position: relative;

  input {
    width: 100%;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.brown};
    padding: 1.6rem 2.4rem 1.6rem 5.8rem;
    border: 0.07rem solid ${(props) => props.theme.colors.gray04};
    border-radius: 8px;
    line-height: 1.6rem;
    outline: none;

    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);

    &::placeholder {
      color: ${(props) => props.theme.colors.gray03};
      font-size: 16px;
    }

    &:hover,
    &:focus-within {
      border-color: ${(props) => props.theme.colors.purple01};
    }
  }

  svg {
    position: absolute;
    color: ${(props) => props.theme.colors.gray02};
    top: 1.2rem;
    left: 2.4rem;
    font-size: 2.4rem;
  }
`;
