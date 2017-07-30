/**
 * Created by kingwubin on 2017/7/19.
 */
/**
 * Created by kingwubin on 2017/7/19.
 */
/**
 * Created by kingwubin on 2017/7/18.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts-liquidfill/dist/echarts-liquidfill.min';

export default class EchartsLiquidfill extends React.Component {
    constructor(props) {
        super(props);
        this.setLiquidfillOption = this.setLiquidfillOption.bind(this);
        this.initLiquidfill = this.initLiquidfill.bind(this)
    }
    initLiquidfill() {
        const data=this.props.data;
        let myChart = echarts.init(document.getElementById(data.id));
        let options = this.setLiquidfillOption(this.props.data);
        myChart.setOption(options)
    }

    componentDidMount() {
        this.initLiquidfill()
    }

    componentDidUpdate() {
        this.initLiquidfill()
    }

    render() {
        const id=this.props.data.id;
        return (
            <div id={id} style={{width: "100%", height: "180px"}}></div>
        )
    }

    //一个基本的echarts图表配置函数
    setLiquidfillOption(data) {
        return {
            title : {
                text: '内存使用率',
                textStyle:{
                    color:'#1d7eb8',
                    fontSize:12,
                },
                x:'center'
            },
            //series: [{
            //     type: 'liquidFill',
            //     data: [0.6, 0.5, 0.4, 0.3],
            //     shape: 'circle',
            //     radius:'55%',
            //     backgroundStyle: {
            //     borderWidth: 2,
            //     borderColor: 'red',
            //     color: 'yellow'
            //     },
            //     label: {
            //         normal: {
            //             textStyle: {
            //                 color: 'red',
            //                 insideColor: 'red',
            //                 fontSize: 8
            //             }
            //         }
            //     }
            // }]
            series: [{
                type: 'liquidFill',
                data: [0.6, 0.5, 0.4, 0.3],
                radius:'55%',
                itemStyle: {
                    normal: {
                        shadowBlur: 0
                    }
                },
                outline: {
                    borderDistance: 0,
                    itemStyle: {
                        borderWidth: 5,
                        borderColor: '#156ACF',
                        shadowBlur: 30,
                        shadowColor: 'rgba(198,70,237, 1)'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: 'red',
                            //insideColor: 'red',
                            fontSize: 18,
                            }
                        }
                    }
            }]

        }

    }

}