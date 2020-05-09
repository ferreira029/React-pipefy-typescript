import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Container } from './styles';
import Card from '../Card'

interface Props {
  title: string;
  creatable: boolean;
  done?: boolean;
  cards?: {
      id: number;
      content: string;
      labels?: string[];
      user?: string;
    }[];
  listIndex: number;
}

const List: React.FC<Props> = ({ title, creatable, cards, done, listIndex }: Props) => {
  return (
    <Container done={done ? done : false}>
      <header>
        <h2> { title } </h2>
        { creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>
      <ul>
        { cards?.map((card, index) => <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />) }
      </ul>
    </Container>
  );
}

export default List;