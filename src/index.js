import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

// import { Container } from './styles';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000213" />
      <Routes />
    </>
  );
}
