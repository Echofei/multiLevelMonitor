import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;

class Delete extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    showConfirm() {
    confirm({
        title: '是否确定删除',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}
    render() {
        return (
            <Button onClick={this.showConfirm.bind(this)}>
                删除
            </Button>
        )
    }
}

export default Delete