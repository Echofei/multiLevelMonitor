import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
//import MachineRoom from '../../components/three';
//import Header from '../../components/three/subpage/header';
import {Col,Row,Button} from 'antd'
import GeneralInfo from '../../components/three/generalinfo';
import AlertInfo from '../../components/three/alertinfo'
//const { Content, Sider } = Layout;
import EquipmentList from '../../components/three/equipmentlist'
import Header from '../../components/three/header'
import Scene from '../../components/three/Scene'
import './style.css';

class VirtualRoom extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="bg">
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <Col span={5} className="info-virtual">
                        <div className="panel-title">信息可视化</div>
                        <div className="sub-title">概况信息</div>
                        <GeneralInfo/>
                        <div className="sub-title">报警信息</div>
                        <AlertInfo/>
                    </Col>
                    <Col span={14}>
                        <Scene/>
                    </Col>
                    <Col span={5}>
                        <EquipmentList/>
                    </Col>
                </Row>
            </div>
        );
    }

}
export default VirtualRoom;