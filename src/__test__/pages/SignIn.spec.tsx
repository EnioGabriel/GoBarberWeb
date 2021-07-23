import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

// describe indica qual categoria do teste
describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { debug } = render(
      // <Router>
      <SignIn />,
      // </Router>,
    );

    debug();
  });
});
