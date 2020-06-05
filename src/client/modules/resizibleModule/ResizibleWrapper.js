import React, {useEffect, useRef} from "react";
import {dragElement, resizeElement} from "./ResizableWrapperLogic";
import './ResizableWrapper.less'

const ResizableWrapper = () => {
    const resizableEl = useRef(null);
    const draggableEl = useRef(null);
    const resizableChild = useRef(null);
    useEffect(() => {
        resizeElement(resizableEl, resizableChild);
        dragElement(resizableEl, draggableEl);
    }, [])

    return (
        <div className='resizable-layout' ref={resizableEl}>
            <div className='handle' ref={draggableEl}>Тащи тут</div>
            <div style={{color : 'red'}}>Как ты там</div>
            <div className='resizers' ref={resizableChild}>
                <div className='resizer top'/>
                <div className='resizer left'/>
                <div className='resizer bottom'/>
                <div className='resizer right'/>
                <div className='resizer circle top-left'/>
                <div className='resizer circle top-right'/>
                <div className='resizer circle bottom-left'/>
                <div className='resizer circle bottom-right'/>
            </div>
        </div>
    )
}

export default ResizableWrapper;

