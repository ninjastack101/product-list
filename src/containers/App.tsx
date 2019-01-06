import React from 'react';

import InputButton from '../components/InputButton';
import RootWrapper from '../components/RootWrapper';
import GlobalStyles from '../global-styles';

class App extends React.Component {
  render() {
    return (
      <RootWrapper>
        <InputButton />
        <GlobalStyles />
      </RootWrapper>
    );
  }
}

export default App;
