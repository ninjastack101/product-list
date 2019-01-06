import styled from 'styled-components';
import Column from './Column';

const PriceWrapper = styled(Column)`
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: dimgray;
  p {
    margin: 5px auto;
    font-size: 15px;
  }
  span {
    font-size: 17px;
  }
`;

export default PriceWrapper;
