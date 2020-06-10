import React, { useEffect, useRef } from 'react';
import { dragElement, resizeElement } from './ResizableWrapperLogic';
import HeaderModule from '../headerModule/Header';
import BodyModule from '../bodyModule/Body';
import './ResizableWrapper.less';

const ResizableWrapper = () => {
  const resizableEl = useRef(null);
  const draggableEl = useRef(null);
  const resizableChild = useRef(null);
  useEffect(() => {
    resizeElement(resizableEl, resizableChild);
    dragElement(resizableEl, draggableEl);
  }, []);

  return (
    <div className="resizable-layout" ref={resizableEl}>
      <HeaderModule refNode={draggableEl} />
      <BodyModule />
      <div className="resizers" ref={resizableChild}>
        <div className="resizer top" />
        <div className="resizer left" />
        <div className="resizer bottom" />
        <div className="resizer right" />
        <div className="resizer top-left" />
        <div className="resizer top-right" />
        <div className="resizer bottom-left" />
        <div className="resizer bottom-right" />
      </div>
    </div>
  );
};

export default ResizableWrapper;
