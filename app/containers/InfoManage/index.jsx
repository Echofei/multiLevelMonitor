import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import CenterInfo from '../../components/infomanage/centerinfo';
import RoomInfo from '../../components/infomanage/roominfo';
import ServiceComponent from '../../components/infomanage/servicecomponent';

class InfoManage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Tabs type="card">
                    <TabPane tab="中心信息" key="1"><CenterInfo/></TabPane>
                    <TabPane tab="机房信息" key="2"><RoomInfo/></TabPane>
                    <TabPane tab="服务组件" key="3"><ServiceComponent/></TabPane>
                </Tabs>
            </div>
        );
    }

}

export default InfoManage;