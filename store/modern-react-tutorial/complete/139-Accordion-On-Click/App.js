import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascsript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components'
  }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // !VA The props go in the Accordion tag to get passed to the Accordion component
  return (
    <div>
      <Accordion items={ items }/>
    </div>
    );
};