import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Examine from '../centerinfo/examine';
import Delete from '../centerinfo/delete';
import Edit from '../centerinfo/edit';
import {Input, Table} from 'antd';
const Search = Input.Search;
import './style.less';

class ServiceComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const columns = [{
            title: '服务组件名称',
            dataIndex: 'serviceComponent',
            width: 150,
        }, {
            title: '组件类型',
            dataIndex: 'componentType',
            width: 150
        }, {
            title: '架构',
            dataIndex: 'framework',
            width: 150
        }, {
            title: '进程列表',
            dataIndex: 'processList',
            width: 150
        }, {
            title: '服务器状态',
            dataIndex: 'serviceState',
            width: 150
        },
            {
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
                serviceComponent: `陈思达的机房${i}`,
                componentType: `momodada${i}`,
                framework: `浮夸达${i}`,
                processList: `派西维尔${i}`,
                serviceState: `派西思达${i}`,
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

export default ServiceComponent