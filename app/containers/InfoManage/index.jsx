import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
<<<<<<< HEAD

=======
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import CenterInfo from '../../components/infomanage/centerinfo';
import RoomInfo from '../../components/infomanage/roominfo';
import ServiceComponent from '../../components/infomanage/servicecomponent';
>>>>>>> 8b75128681fcf03a2e78b6feaad01c4b83938f8d

class InfoManage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                信息管理
            </div>
        );
    }

}

export default InfoManage;