import styled from 'styled-components';

const Li = styled('li')<{ highlight: boolean }>`
  display: block;
  font-size: 24px;
  background-color: ${({ highlight }) => highlight ? 'blanchedalmond' : 'cornflowerblue'};
  padding: 10px;
  border-radius: 5px;
  margin: 5px 20px;
`;

export default Li;
