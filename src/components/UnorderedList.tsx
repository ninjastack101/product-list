import React from 'react';

import Ul from './Ul';
import Li from './Li';
import { IItem } from '../types';

interface IProps {
  items: IItem[];
};

const UnorderedList = (props: IProps) => (
  <Ul>
    {props.items.map((item, index) => (
      <Li key={item.key}>
        {item.label}
      </Li>
    ))}
  </Ul>
);

export default UnorderedList;
