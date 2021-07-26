import React, {
  InputHTMLAttributes,
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

// useCallback: faz com q a função nao seja recriada toda vez que o componente atualiza
// usar sempre que criar uma funçao dentro de um componente

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  // eslint-disable-next-line
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []); // []: qnd está vazio, significa q será recriada somente uma vez

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // Verifica se o campo foi preenchido
    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName, // Pega o nome do campo
      ref: inputRef.current, // Da acesso ao input no html
      path: 'value', // da o valor digitado no input
    });
  }, [fieldName, registerField]);

  return (
    // !! usado para converter valores verdadeiros em valores
    // booleanos verdadeiros e valores falsos em falsos booleanos
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}
      {/* pegando todas as propriedades e passando dentro do input */}
      <input
        onFocus={handleInputFocus} // qnd o imput ganha foco (é clicado)
        onBlur={handleInputBlur} // qnd o input perde o foco (qnd deixa de ser clicado)
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
