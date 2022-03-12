import React, {memo, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';

import {
  makeSelectIncidentList,
  makeSelectError,
  makeSelectLoading
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadIncidentList } from './actions';
import { useInjectReducer } from '../../utils/inject.reducer';
import { useInjectSaga } from '../../utils/inject.saga';
import IncidentListComponent from '../../components/incidents/incident.list.component';

const key = 'incidentList';

export function IncidentListContainer({
  incidentList,
  loading,
  error,
  loadIncidentList  
}: any) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    loadIncidentList();
  }, []);

  return (
    <Layout>
      <Header>
        <h3 className='header'>Incident Management System</h3>
      </Header>
      <Content>
        <IncidentListComponent incidnetList={incidentList} />
      </Content>
    </Layout>
  );
}

IncidentListContainer.propTypes = {
  loading: PropTypes.bool,
  incidentList: PropTypes.array,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loadIncidentList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  incidentList: makeSelectIncidentList(),
  loading: makeSelectLoading(),
  loginError: makeSelectError(),
});

export function mapDispatchToProps(dispatch: any) {
  return {
    loadIncidentList: () => dispatch(loadIncidentList()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(IncidentListContainer);
