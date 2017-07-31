import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Modal,Button} from 'antd'

class Examine extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            visible:false,
            confirmLoading:false
        }
    }
    handleOk(){
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false
            });
        }, 500);
    }
    showModal(){
        this.setState({
            visible: true
        });
    }
    handleCancel(){
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div className="list">
                    <Button onClick={this.showModal.bind(this)}>查看</Button>
                    <Modal visible={this.state.visible}
                           onOk={this.handleOk.bind(this)}
                           confirmLoading={this.state.confirmLoading}
                           onCancel={this.handleCancel.bind(this)}>
                        <div>中心名称：詹姆斯</div>
                        <div>中心类型：king</div>
                        <div>所属机构名称：土豪联盟</div>
                        <div>中心代码：LBJking</div>
                        <div>中心别名：bigKING</div>
                        <div>中心地址：苏州纳米城</div>
                        <div>联系电话：18888888888</div>
                        <div>电子邮箱：king@momodada.cn</div>
                        <div>负责人：陈思达</div>
                        <div>负责人电话：18305217704</div>
                        <div>备注：全栈工程师</div>
                    </Modal>
            </div>
        )
    }
}

export default Examine