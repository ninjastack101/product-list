import React from 'react';
import styled from 'styled-components';

import Product from './Product';
import { IProduct } from '../types';

interface IProps {
  products: IProduct[];
};

const Wrapper = styled('div')`
  margin: auto 5%;
`;

const ProductList = (props: IProps) => (
  <Wrapper>
    {props.products.map(
      product => <Product key={product.id} {...product} />
    )}
  </Wrapper>
);

export default ProductList;
