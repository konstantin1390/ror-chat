import React, { useEffect, useRef } from 'react';
import { dragElement, resizeElement } from './ResizableLogic';
import HeaderModule from '../headerModule/Header';
import BodyModule from '../bodyModule/Body';
import { Resizable } from './styledResizable';
import './Resizable.less';

const ResizableWrapper = ({ toggleMode }) => {
  const resizableEl = useRef(null);
  const draggableEl = useRef(null);
  const resizableChild = useRef(null);
  useEffect(() => {
    resizeElement(resizableEl, resizableChild);
    dragElement(resizableEl, draggableEl);
  }, []);

  return (
    <Resizable ref={resizableEl}>
      <HeaderModule toggleFullScreen={toggleMode} refNode={draggableEl} />
      <BodyModule />
      <div className="resize" ref={resizableChild}>
        <div className="top" />
        <div className="left" />
        <div className="bottom" />
        <div className="right" />
        <div className="top-left" />
        <div className="top-right" />
        <div className="bottom-left" />
        <div className="bottom-right" />
      </div>
    </Resizable>
  );
};

export default ResizableWrapper;
