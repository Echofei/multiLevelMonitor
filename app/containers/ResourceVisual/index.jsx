import React from 'react';
import {Row, Col} from 'antd';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Title from '../../components/title';
import Time from '../../components/time';
import TreeSelectComponent from '../../components/treeselect';
import Dashboard from './subpage/dashboard';
import JuniorCenter from '../../components/juniorcenter';
import {getTreeData,getJuniorCenter,getDashboard} from '../../fetch/ResourceVisual/resourceVisual'
import './style.css'

class ResourceVisual extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            treeDate: [],
            dashboard: {},
            juniorCenter: {}
        }
    }
    render() {
        return (
<<<<<<< HEAD
            <div className="bg">
=======
            <div className="body">
>>>>>>> 8b75128681fcf03a2e78b6feaad01c4b83938f8d
                <Row>
                    <Col span={24}><Title/></Col>
                </Row>
                <Row style={{height:'60px'}}>
                    <Col span={7} className='administer'>管辖中心概括</Col>
                    <Col span={6} className="manager">
                        {
                            this.state.treeDate.length
                            ? <TreeSelectComponent treeDate={this.state.treeDate}/>
                            : ''
                        }
                    </Col>
                    <Col span={6} className="time">
                        <Time/>
                    </Col>
                    <Col span={5} className='junior'>下级中心</Col>
                </Row>
                <Row>
                    <Col span={19}>
                        {
                            this.state.dashboard
                            ? <Dashboard Data={this.state.dashboard}/>
                            : ''
                        }

                    </Col>
                    <Col span={5} className='bgi'>
                        {
                            this.state.juniorCenter.length
                                ? <JuniorCenter juniorCenterDate={this.state.juniorCenter}/>
                                : ''
                        }
                    </Col>
                </Row>
            </div>
        );
    }
    componentDidMount() {
        // 获取目录树数据
        const getTreeDataResult = getTreeData();
        getTreeDataResult.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json.data;
            if (data) {
                this.setState({
                    treeDate: data
                })
            }
        }).catch(ex => {
                console.error('获取目录树数据报错, ', ex.message)
        });

        // 获取仪表盘数据
        const getDashboardResult = getDashboard();
        getDashboardResult.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json.dashboard;
            if (data) {
                this.setState({
                    dashboard: data
                })
            }
        }).catch(ex => {
            // 发生错误
                console.error('获取仪表盘数据报错, ', ex.message)
        });

        // 获取下级中心数据
        const getJuniorCenterResult = getJuniorCenter();
        getJuniorCenterResult.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json.juniorCenterList;
            if (data.length) {
                this.setState({
                    juniorCenter: data
                })
            }
        }).catch(ex => {
            // 发生错误
                console.error('获取下级中心数据, ', ex.message)
        })
    }
}

export default ResourceVisual;