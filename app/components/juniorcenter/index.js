/**
 * Created by kingwubin on 2017/7/18.
 */
import './style.less'
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Row,Col} from 'antd';
import EchartsPie from '../dashboard/echarts/EchartsPie';
import EchartsLiquidfill from '../dashboard/echarts/EchartsLiquidfill'

class JuniorCenterComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="container">
                {this.props.juniorCenterDate.map((item,index)=>{
                    return <div style={{width: "100%", height: "280px"}} key={index}>
                        <Row>
                            <Col>
                                <div className="box">
                                <div className='junior1'>{item.centerName}</div>
                                <div className="img">1</div>
                                </div>
                            </Col>
                            <Col span={7} className="module">
                                <div className="content">
                                    CPU核数
                                </div>
                                <div className="num">
                                    {item.centerInfo.CPUNum}
                                </div>
                            </Col>
                            <Col span={7} className="module">
                                <div className="content">
                                    CPU使用率
                                </div>
                                <div className="num">
                                    {item.centerInfo.CPUUser}%
                                </div>
                            </Col>
                            <Col span={7} className="module">
                                <div className="content">
                                    服务器总数
                                </div>
                                <div className="num">
                                    {item.centerInfo.serverNum}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="module1">
                                {
                                item.centerInfo.diskUser ? <EchartsPie data={item.centerInfo.diskUser}/>:''
                                }
                            </Col>
                            <Col span={12} className="module1">
                                {
                                item.centerInfo.memory ? <EchartsLiquidfill data={item.centerInfo.memory}/>:''
                                }
                            </Col>
                        </Row>
                    </div>
                })}
            </div>

        )
    }
}

export default JuniorCenterComponent