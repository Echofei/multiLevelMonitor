import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Modal,Button,Input} from 'antd'

class Edit extends React.Component {
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
        }, 300);
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
                <Button onClick={this.showModal.bind(this)}>编辑</Button>
                <Modal visible={this.state.visible}
                       onOk={this.handleOk.bind(this)}
                       confirmLoading={this.state.confirmLoading}
                       onCancel={this.handleCancel.bind(this)}>
                    <div>中心名称：<Input/></div>
                    <div>中心类型：<Input/></div>
                    <div>所属机构名称：<Input/></div>
                    <div>中心代码：<Input/></div>
                    <div>中心别名：<Input/></div>
                    <div>中心地址：<Input/></div>
                    <div>联系电话：<Input/></div>
                    <div>电子邮箱：<Input/></div>
                    <div>负责人：<Input/></div>
                    <div>负责人电话：<Input/></div>
                    <div>备注：<Input/></div>
                </Modal>
            </div>
        )
    }
}

export default Edit