import React from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/gauge';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
export default class EchartsGauge extends React.Component {
    constructor(props) {
        super(props);
        this.setGaugeOption = this.setGaugeOption.bind(this);
        this.initGauge = this.initGauge.bind(this)
    }
    initGauge() {
            const data = this.props.data;
            let myChart = echarts.init(document.getElementById(data.id));
            let options = this.setGaugeOption(data.data);
            myChart.setOption(options)
    }
    componentDidMount() {
        this.initGauge()
    }
    componentDidUpdate() {
        this.initGauge()
    }
    render() {
        const id = this.props.data.id;
        return (
            <div>
                <div id={id} style={{width: "100%", height: "280px"}}></div>
            </div>
        )
    }
    //一个基本的echarts图表配置函数
    setGaugeOption(data) {
        return {
            series : [
                {
                    name:'速度',
                    type:'gauge',
                    min:0,
                    max:10000,
                    splitNumber:10,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#B2EAF0'],[0.8, '#40AFE5'],[1, '#FA5F29']],
                            width: 3,
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {            // 坐标轴小标记
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length :10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: {           // 分隔线
                        length :20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:3,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {           // 分隔线
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title : {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    detail : {
                        //backgroundColor: 'rgba(30,144,255,0.8)',
                        //borderWidth: 1,
                        //borderColor: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5,
                        offsetCenter: [-5, '50%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#fff'
                        }
                    },
                    data:[{value: data, name: 'km/h'}]
                }
            ]
        }
    }

}