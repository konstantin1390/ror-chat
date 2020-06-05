export const resizeElement = (node, childNode) => {
    const element = node.current;
    const resizers = childNode.current.childNodes;
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

        const resize = (e) => {
            if (currentResizer.classList.contains('bottom-right')) {
                const width = original_width + (e.pageX - original_mouse_x);
                const height = original_height + (e.pageY - original_mouse_y)
                if (width > minimum_size) {
                    element.style.width = `${width}px`;
                }
                if (height > minimum_size) {
                    element.style.height = `${height}px`;
                }
            } else if (currentResizer.classList.contains('top')) {

                const height = original_height - (e.pageY - original_mouse_y);
                if (height > minimum_size) {
                    element.style.height = `${height}px`;
                    element.style.top = `${original_y + (e.pageY - original_mouse_y)}px`;
                }
            } else if (currentResizer.classList.contains('left')) {

                const width = original_width - (e.pageX - original_mouse_x);
                if (width > minimum_size) {
                    element.style.width = `${width}px`;
                    element.style.left = `${original_x + (e.pageX - original_mouse_x)}px`;
                }
            } else if (currentResizer.classList.contains('bottom')) {
                const height = original_height + (e.pageY - original_mouse_y);
                if (height > minimum_size) {
                    element.style.height = `${height}px`;
                }
            } else if (currentResizer.classList.contains('right')) {
                const width = original_width + (e.pageX - original_mouse_x);
                if (width > minimum_size) {
                    element.style.width = `${width}px`;
                }
            } else if (currentResizer.classList.contains('bottom-left')) {
                const height = original_height + (e.pageY - original_mouse_y);
                const width = original_width - (e.pageX - original_mouse_x);
                if (height > minimum_size) {
                    element.style.height = `${height}px`;
                }
                if (width > minimum_size) {
                    element.style.width = `${width}px`;
                    element.style.left = `${original_x + (e.pageX - original_mouse_x)}px`;
                }
            } else if (currentResizer.classList.contains('top-right')) {
                const width = original_width + (e.pageX - original_mouse_x);
                const height = original_height - (e.pageY - original_mouse_y);
                if (width > minimum_size) {
                    element.style.width = `${width}px`;
                }
                if (height > minimum_size) {
                    element.style.height = `${height}px`;
                    element.style.top = `${original_y + (e.pageY - original_mouse_y)}px`;
                }
            } else {
                const width = original_width - (e.pageX - original_mouse_x);
                const height = original_height - (e.pageY - original_mouse_y);
                if (width > minimum_size) {
                    element.style.width = `${width}px`;
                    element.style.left = `${original_x + (e.pageX - original_mouse_x)}px`;
                }
                if (height > minimum_size) {
                    element.style.height = `${height}px`;
                    element.style.top = `${original_y + (e.pageY - original_mouse_y)}px`;
                }
            }
        }
        const stopResize = () => window.removeEventListener('mousemove', resize);
    });
}

export const dragElement = (node, handleNode) => {
    let firstPosition = 0;
    let secondPosition = 0;
    let thirdPosition = 0;
    let fourthPosition = 0;

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    const elementDrag = (e) => {
        e.preventDefault();
        firstPosition = thirdPosition - e.clientX;
        secondPosition = fourthPosition - e.clientY;
        thirdPosition = e.clientX;
        fourthPosition = e.clientY;
        node.current.style.top = `${node.current.offsetTop - secondPosition}px`;
        node.current.style.left = `${node.current.offsetLeft - firstPosition}px`;
    }

    const dragMouseDown = (e) => {
        e.preventDefault();
        thirdPosition = e.clientX;
        fourthPosition = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    handleNode.current.onmousedown = dragMouseDown;
}
