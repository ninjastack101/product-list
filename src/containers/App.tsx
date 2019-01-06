import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import InputButton from '../components/InputButton';
import RootWrapper from '../components/RootWrapper';
import { addListItem } from '../actions';
import { selectItems } from '../selectors';
import GlobalStyles from '../global-styles';
import { IApplicationRootState, IItem } from '../types';

interface IProps {
  items: IItem[];
  addListItem: (item: IItem) => void;
};

const App = (props: IProps) => (
  <RootWrapper>`
    <InputButton onClick={props.addListItem} />
    <GlobalStyles />
  </RootWrapper>
);

const mapStateToProps = (state: IApplicationRootState) => ({
  items: selectItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addListItem,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
