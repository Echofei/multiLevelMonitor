import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Examine from '../centerinfo/examine';
import Delete from '../centerinfo/delete';
import Edit from '../centerinfo/edit';
import {Input, Table} from 'antd';
const Search = Input.Search;
import './style.less';

class RoomInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const columns = [{
            title: '机房名称',
            dataIndex: 'roomName',
            width: 150,
        }, {
            title: '所属机房代码',
            dataIndex: 'userRoomCode',
            width: 150
        }, {
            title: '机房编号',
            dataIndex: 'roomCode',
            width: 150
        }, {
            title: '负责人',
            dataIndex: 'responsiblePerson',
            width: 150
        }, {
            title: 'operation',
            dataIndex: 'action',
            width: 150,
            render: () => (
                <span>
                <Examine/>
                <span className="ant-divider"/>
                <Edit/>
                <span className="ant-divider"/>
                <Delete/>
                </span>
            )
        }];

        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                key: i,
                roomName: `陈思达的机房${i}`,
                userRoomCode: `momodada${i}`,
                roomCode: `浮夸达${i}`,
                responsiblePerson: `派西维尔${i}`
            });
        }
        return (
            <div>
                <Search
                    placeholder="输入搜索文字"
                    style={{width: 200}}
                    onSearch={value => console.log(value)}
                />
                <Table columns={columns} dataSource={data} pagination={{pageSize: 50}} scroll={{y: 500}}/>
            </div>
        )
    }
}

export default RoomInfo