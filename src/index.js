import React from 'react';
import { render } from 'react-dom';
import { Container } from '@cerebral/react';
import AppComponent from './App';
import App from './cerebralApp';
import './styles.css';

render(
  <Container app={App}>
    <AppComponent />
  </Container>,
  document.querySelector('#root')
);
