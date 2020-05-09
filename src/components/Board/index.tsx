import React, { useState } from 'react';
import produce from 'immer';
import BoardContext from './context';
import { Container } from './styles';
import List from '../List';
import { loadLists } from '../../services/api';

const Board: React.FC = () => {
  const data = loadLists();
  const [lists, setLists] = useState(data);

  function move(fromList: number, toList: number, from: number, to: number) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }

  return (
    <BoardContext.Provider value={{lists, move}}>
      <Container>
        { lists.map((list, index) => {
          return (
          <List
            key={list.title}
            title={list.title}
            creatable={list.creatable}
            done={list.done}
            cards={list.cards}
            listIndex={index}
          />
          );
          }) }
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;