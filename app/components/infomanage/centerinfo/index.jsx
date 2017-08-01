import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Examine from './examine';
import Delete from './delete';
import Edit from './edit';
import {Input, Table} from 'antd';
const Search = Input.Search;
import './style.less';

class CenterInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const columns = [{
            title: '中心名称',
            dataIndex: 'centerName',
            width: 150,
        }, {
            title: '所属机构代码',
            dataIndex: 'bodyCode',
            width: 150
        }, {
            title: '中心代码',
            dataIndex: 'centerCode',
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
                centerName: `司令${i}`,
                bodyCode: `king${i}`,
                centerCode: `James${i}`,
                responsiblePerson: `习近平${i}`,
                action: `查看 编辑 删除${i}`,
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

export default CenterInfo