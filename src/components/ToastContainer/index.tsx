import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    key: messages,
    from: { right: '-120%', opacity: 0 }, // inicio
    enter: { right: '0%', opacity: 1 }, // aparece em tela
    leave: { right: '-120%', opacity: 0 }, // finaliza
  });

  return (
    <Container>
      {messagesWithTransitions((props, item) => (
        <Toast key={item.id} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
