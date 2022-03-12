import React from 'react';
import { ReactReduxContext } from 'react-redux';
import getInjectors from './reducer.injectors';

const useInjectReducer = ({ key, reducer }: any) => {
  const context = React.useContext(ReactReduxContext);
  React.useEffect(() => {
    getInjectors(context.store).injectReducer(key, reducer);
  }, []);
};

export { useInjectReducer };
