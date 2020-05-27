import React from 'react';
import { SizeMe } from 'react-sizeme';

const Res = () => (
  <div
    style={{
      width: '800px',
      height: '400px',
    }}
  >
    <SizeMe>{({ size }) => <div>My width is {size.width}px</div>}</SizeMe>
  </div>
);
export default Res;
