import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import RootWrapper from '../components/RootWrapper';
import GlobalStyles from '../global-styles';
import { fetchProducts } from '../actions';
import { IApplicationRootState } from '../types';

interface IProps {
  fetchProducts: Function;
};

class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    props.fetchProducts();
  }

  render() {
    return (
      <RootWrapper>
        <GlobalStyles />
      </RootWrapper>
    );
  }
}

const mapStateToProps = (state: IApplicationRootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  fetchProducts,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
