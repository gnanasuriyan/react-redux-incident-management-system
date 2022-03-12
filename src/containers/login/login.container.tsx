import React, { useEffect, memo } from 'react';
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';

import LoginFormComponent from '../../components/login/login.component';
import { useInjectReducer } from '../../utils/inject.reducer';
import { useInjectSaga } from '../../utils/inject.saga';

import {
  makeSelectLoginLoading,
  makeSelectLoginError,
  makeSelectIsLoginSucceed
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { doLogin } from './actions';

import './login.container.css';
import { UserCredentials } from './user..type';

const key = 'login';

export function LoginContainer({
  isLoading,
  error,
  isLoginSucceed,
  doLogin
}: any) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const history = useHistory();
  useEffect(() => {
    if (isLoginSucceed) {
      history.push('/incidents');
    }
  }, [isLoginSucceed]);

  return (
    <Layout>
      <Header>
        <h3 className='header'>Incident Management System</h3>
      </Header>
      <Content>
        <LoginFormComponent doLogin={doLogin} isLoading={isLoading} err={error} />
      </Content>
    </Layout>
  );
}

LoginContainer.propTypes = {
  isLoading: PropTypes.bool,
  isLoginSucceed: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  doLogin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoginLoading(),
  loginError: makeSelectLoginError(),
  isLoginSucceed: makeSelectIsLoginSucceed()
});

export function mapDispatchToProps(dispatch: any) {
  return {
    doLogin: (credentials: UserCredentials) => dispatch(doLogin(credentials)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginContainer);
