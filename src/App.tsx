import React from 'react';
import { DndProvider } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <DndProvider backend={HTMLBackend}>
      <Header />
      <Board />
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
