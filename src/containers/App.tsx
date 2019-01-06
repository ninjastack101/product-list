import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import RootWrapper from '../components/RootWrapper';
import GlobalStyles from '../global-styles';
import { IApplicationRootState } from '../types';

interface IProps {};

const App = (props: IProps) => (
  <RootWrapper>
    <GlobalStyles />
  </RootWrapper>
);

const mapStateToProps = (state: IApplicationRootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
