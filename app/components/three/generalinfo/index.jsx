import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.css';
import {Card} from 'antd'
class GeneralInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <ul className="general-info-list">
                    <li>
                        <span>机房名称</span>
                        <p>虚拟机房</p>
                    </li>
                    <li>
                        <span>机房说明</span>
                         <p>虚拟机房是非常酷炫的虚拟机房是非常酷炫的</p>
                    </li>
                    <li>
                        <span>机柜总量</span>
                        <p>10台</p>
                    </li>
                    <li>
                        <span>服务器总量</span>
                        <p>100台</p>
                    </li>
                    <li>
                        <span>CPU核数</span>
                        <p>8</p>
                    </li>
                    <li>
                        <span>内存利用率</span>
                        <p>8</p>
                    </li>
                    <li>
                        <span>CPU利用率</span>
                        <p>8</p>
                    </li>
                    <li>
                        <span>机柜利用率</span>
                        <p>8</p>
                    </li>
                    <li>
                        <span>磁盘利用率</span>
                        <p>8</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default GeneralInfo