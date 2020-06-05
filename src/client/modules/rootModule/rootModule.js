import React, {Component} from 'react';
import ResizableWrapper from "../resizibleModule/ResizibleWrapper";
import './rootModule.less'

class RootModule extends Component {
    render() {
        return (
            // <div className="Root">
                <ResizableWrapper/>
            // </div>
        );
    }
}

export default RootModule;
