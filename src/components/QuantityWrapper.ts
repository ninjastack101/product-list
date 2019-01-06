import styled from 'styled-components';
import Row from './Row';

const QuantityWrapper = styled(Row)`
  font-size: 17px;
  color: dimgray;

  b:not(:last-child) {
    margin-right: 50px;
  }
`;

export default QuantityWrapper;
