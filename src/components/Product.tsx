import React from 'react';
import styled from 'styled-components';
import { IProduct } from '../types';
import Row from './Row';
import Column from './Column';
import Title from './Title';
import ProductImage from './ProductImage';
import QuantityWrapper from './QuantityWrapper';
import PriceWrapper from './PriceWrapper';

interface IProps extends IProduct {};

const Wrapper = styled('div')`
  display: flex;
  margin: 10px auto;
  padding: 10px;  
`;

const DetailsWrapper = styled(Column)`
  flex: 1;
`;

const Product = (props: IProps) => (
  <Wrapper>
    <ProductImage src={props.thumbnail} alt="product-thumbnail" />
    <DetailsWrapper>
      <Title>{props.title}</Title>
      <QuantityWrapper>
        <b>Available quantity: {props.available_quantity}</b>
        <b>Sold quantity: {props.sold_quantity}</b>
      </QuantityWrapper>
    </DetailsWrapper>
    <PriceWrapper>
      <p>Price</p> <span>{props.price}</span>
    </PriceWrapper>
  </Wrapper>
);

export default Product;
