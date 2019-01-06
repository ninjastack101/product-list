import React from 'react';
import styled from 'styled-components';
import InputButton from '../components/InputButton';
import GlobalStyles from '../global-styles';

const Wrapper = styled('div')`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <InputButton />
        <GlobalStyles />
      </Wrapper>
    );
  }
}

export default App;
