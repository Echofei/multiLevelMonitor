import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';
import {Layout, Menu, Icon} from 'antd';
import ToggleDisplay from 'react-toggle-display';

const { Header, Sider, Content } = Layout;
class EquipmentList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = { show: false };
    }
    handleClick() {
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        return (
            <div className="equip-manage">
                <div className="panel-title">设备管理</div>
                <div className="sub-title">设备列表</div>


                        <button onClick={ () => this.handleClick() }>Toggle things</button>


                    <ToggleDisplay show={this.state.show}>
                        <Menu className="equip-list" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="database" />
                                <span>机柜1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="database" />
                                <span>机柜1</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="database" />
                                <span>机柜1</span>
                            </Menu.Item>
                        </Menu>
                    </ToggleDisplay>

                    <ToggleDisplay if={this.state.show} tag="section">
                        <div>
                            <span>设备信息</span>
                            <span>服务器列表</span>
                        </div>
                    </ToggleDisplay>
            </div>
        )
    }
}

export default EquipmentList