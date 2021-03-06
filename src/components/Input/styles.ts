import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip ';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    // eslint-disable-next-line
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    // eslint-disable-next-line
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    // eslint-disable-next-line
    props.isFilled &&
    css`
      color: #ff9000;
    `}

    // Corrigindo mudança na cor do input qnd autofilled do chrome é utilizado
    input:-webkit-autofill,
      input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  input {
    flex: 1; // ocupa todo espaço possivel
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
