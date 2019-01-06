import React from 'react';
import styled from 'styled-components';
import { IProduct } from '../types';

interface IProps extends IProduct {};

const Wrapper = styled('div')``;

const Product = (props: IProps) => (
  <Wrapper>
    {props.title}
  </Wrapper>
);

export default Product;
