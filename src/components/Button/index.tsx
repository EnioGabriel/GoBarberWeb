import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

// eslint-disable-next-line
import { Container } from './styles';

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {/* children: texto padrao do botão */}
    {loading ? 'carregando...' : children}
  </Container>
);

export default Button;
