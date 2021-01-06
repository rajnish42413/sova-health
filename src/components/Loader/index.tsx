import React from 'react';
import { Spin } from 'antd';

export default function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',
        width: '100%',
        opacity: '0.85',
        position: 'absolute',
        top: 0,
        zIndex: 999999
      }}
    >
      <Spin size="large" tip="Loading..." />
    </div>
  );
}
