import React, {useRef, useEffect} from "react";
import './TestResize.less';

const Resizer = () => {
    const resizableEl = useRef(null);
    const grudEl = useRef(null);
    const resizableChild = useRef(null);
    useEffect(() => {
        makeResizableDiv();
        dragElement();
    }, [])
    const makeResizableDiv = () => {
        const element = resizableEl.current;
        const resizers = resizableChild.current.childNodes;
        const minimum_size = 20;
        let original_width = 0;
        let original_height = 0;
        let original_x = 0;
        let original_y = 0;
        let original_mouse_x = 0;
        let original_mouse_y = 0;
        resizers.forEach(res => {
            const currentResizer = res;
            currentResizer.addEventListener('mousedown', function (e) {
                e.preventDefault();
                original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
                original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
                original_x = element.getBoundingClientRect().left;
                original_y = element.getBoundingClientRect().top;
                original_mouse_x = e.pageX;
                original_mouse_y = e.pageY;
                window.addEventListener('mousemove', resize);
                window.addEventListener('mouseup', stopResize);
            })

            function resize(e) {
                if (currentResizer.classList.contains('bottom-right')) {
                    const width = original_width + (e.pageX - original_mouse_x);
                    const height = original_height + (e.pageY - original_mouse_y)
                    if (width > minimum_size) {
                        element.style.width = width + 'px'
                    }
                    if (height > minimum_size) {
                        element.style.height = height + 'px'
                    }
                } else if (currentResizer.classList.contains('top')) {

                    const height = original_height - (e.pageY - original_mouse_y);
                    if (height > minimum_size) {
                        element.style.height = height + 'px';
                        element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
                    }
                } else if (currentResizer.classList.contains('left')) {

                    const width = original_width - (e.pageX - original_mouse_x);
                    if (width > minimum_size) {
                        element.style.width = width + 'px';
                        element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
                    }
                } else if (currentResizer.classList.contains('bottom')) {
                    const height = original_height + (e.pageY - original_mouse_y);
                    if (height > minimum_size) {
                        element.style.height = height + 'px'
                    }
                } else if (currentResizer.classList.contains('right')) {
                    const width = original_width + (e.pageX - original_mouse_x);
                    if (width > minimum_size) {
                        element.style.width = width + 'px';
                    }
                } else if (currentResizer.classList.contains('bottom-left')) {
                    const height = original_height + (e.pageY - original_mouse_y);
                    const width = original_width - (e.pageX - original_mouse_x);
                    if (height > minimum_size) {
                        element.style.height = height + 'px';
                    }
                    if (width > minimum_size) {
                        element.style.width = width + 'px';
                        element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
                    }
                } else if (currentResizer.classList.contains('top-right')) {
                    const width = original_width + (e.pageX - original_mouse_x);
                    const height = original_height - (e.pageY - original_mouse_y);
                    if (width > minimum_size) {
                        element.style.width = width + 'px';
                    }
                    if (height > minimum_size) {
                        element.style.height = height + 'px';
                        element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
                    }
                } else {
                    const width = original_width - (e.pageX - original_mouse_x);
                    const height = original_height - (e.pageY - original_mouse_y);
                    if (width > minimum_size) {
                        element.style.width = width + 'px';
                        element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
                    }
                    if (height > minimum_size) {
                        element.style.height = height + 'px';
                        element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
                    }
                }
            }

            function stopResize() {
                window.removeEventListener('mousemove', resize);
            }
        });
    }

    const dragElement = () => {
        let pos1 = 0;
        let pos2 = 0;
        let pos3 = 0;
        let pos4 = 0;

        grudEl.current.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            resizableEl.current.style.top = (resizableEl.current.offsetTop - pos2) + "px";
            resizableEl.current.style.left = (resizableEl.current.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    return (
        <div className='resizable' ref={resizableEl}>
            <div className='handle' ref={grudEl}>Тащи тут</div>
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

export default Resizer;