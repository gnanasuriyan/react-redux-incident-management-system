import React, { useEffect, memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LoginContainer from '../login/loadable.login.container';
import IncidentListContainer from '../incidents/loadable.incident.list.container';
import LoaderComponent from '../../components/loader/loader';

import { useInjectReducer } from '../../utils/inject.reducer';
import { useInjectSaga } from '../../utils/inject.saga';

import {
  makeSelectUserDetails,
  makeSelectIsSessionValid,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { checkSession } from './actions';
import './app.css';

const key = 'app';

export function App({
  isSessionValid,
  checkSession,
  error
}: any) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const history = useHistory();
  useEffect(() => {
    if (!isSessionValid && !error) {
      checkSession()
    } else if (error) {
      history.push('/login');
    } else if(isSessionValid) {
      history.push('/incidents');
    }
  }, [isSessionValid, error]);

  return (
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <Route path="/incidents" component={IncidentListContainer} />
      <Route path="" component={LoaderComponent} />
    </Switch>
  );
}

App.propTypes = {
  isSessionValid: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  checkSession: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isSessionValid: makeSelectIsSessionValid(),
  error: makeSelectError(),
  userDetails: makeSelectUserDetails(),
});

export function mapDispatchToProps(dispatch: any) {
  return {
    checkSession: () => dispatch(checkSession()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
