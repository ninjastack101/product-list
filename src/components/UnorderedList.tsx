import React from 'react';

import Ul from './Ul';
import Li from './Li';
import { IItem } from '../types';

interface IProps {
  items: IItem[];
};

const shouldHighlightItem = (index: number) => {
  const number = index + 1;
  return number % 3 === 0;
};

const UnorderedList = (props: IProps) => (
  <Ul>
    {props.items.map((item, index) => (
      <Li key={item.key} highlight={shouldHighlightItem(index)}>
        {item.label}
      </Li>
    ))}
  </Ul>
);

export default UnorderedList;
