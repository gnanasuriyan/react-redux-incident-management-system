import React from 'react';
import loadable from '../../utils/loadable';
import LoaderComponent from '../../components/loader/loader';

export default loadable(() => import('./login.container'), {
  fallback: <LoaderComponent />,
});
