// Criando rota estilizada para saber se o usuário está autenticado

import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRoutesProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRoutesProps {
  isPrivate?: boolean;
  // Sobrescrevendo a tipagem para receber apenas o nome do componente == {CompNome}
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      // eslint-disable-next-line
      render={({ location }) => {
        // location: da o histórico da pagina, auxiliando o botão voltar do navegador
        // verifica se a rota é privada e o usuário está autenticado
        return isPrivate === !!user ? (
          <Component />
        ) : (
          // Se for privada, redireciona para login. caso contrario, dashboard
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
