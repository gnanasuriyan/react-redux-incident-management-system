import React from 'react';
import { Spin } from 'antd';

const LoaderComponent = () => {
  return (
    <div className='app-loader'>
        <Spin />
    </div>
  );
};

export default LoaderComponent;
