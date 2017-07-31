import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Row,Col} from 'antd'
import './style.less'
class Title extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="header-title">
                <div className="title-div">
                    <span className="left-button"></span>
                    <span className="mid-button">资源状态</span>
                    <span className="right-button"></span>
                </div>
            </div>
        );
    }
}

export default Title;