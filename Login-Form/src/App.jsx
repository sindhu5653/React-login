
import React from 'react';
import { SignProvider } from './SignContext';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <SignProvider>
      <LoginPage />
    </SignProvider>
  );
};

export default App;
