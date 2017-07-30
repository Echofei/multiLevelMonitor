/**
 * Created by kingwubin on 2017/7/19.
 */
/**
 * Created by kingwubin on 2017/7/18.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

export default class EchartsPie extends React.Component {
    constructor(props) {
        super(props);
        this.setPieOption = this.setPieOption.bind(this);
        this.initPie = this.initPie.bind(this)
    }
    initPie() {
        const data=this.props.data;
        let myChart = echarts.init(document.getElementById(data.id));
        let options = this.setPieOption(this.props.data);
        myChart.setOption(options)
    }

    componentDidMount() {
        this.initPie()
    }

    componentDidUpdate() {
        this.initPie()
    }

    render() {
        const id=this.props.data.id;
        return (
            <div id={id} style={{width: "100%", height: "180px"}}></div>
        )
    }

    //一个基本的echarts图表配置函数
    setPieOption(data) {
        return {
            title : {
                text: '磁盘使用率',
                textStyle:{
                    color:'#1d7eb8',
                    fontSize:12,
                    fontStyle: 'normal',
                    fontWeight:'bold',
                    fontFamily: 'sans-serif',

                },
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            calculable : true,
            // series : [
            //     {
            //         name:'半径模式',
            //         type:'pie',
            //         radius : [50,60],
            //         center : ['50%', '50%'],
            //         roseType : 'radius',
            //         label: {
            //             normal: {
            //                 show: false
            //             },
            //             emphasis: {
            //                 show: true
            //             }
            //         },
            //         lableLine: {
            //             normal: {
            //                 show: false
            //             },
            //             emphasis: {
            //                 show: true
            //             }
            //         },
            //         data:[
            //             {value:data.data, name:'已使用'},
            //             {value:data.data, name:'未使用'}
            //         ]
            //     }
            // ]
            series: [{
                type: 'pie',
                radius: ['50%', '60%'],
                silent: true,
                data: [{
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: '#050f58',
                            borderColor: '#162abb',
                            borderWidth: 2,
                            shadowBlur: 50,
                            shadowColor: 'rgba(21,41,185,.75)'
                        }
                    }
                }]
            }, {
                type: 'pie',
                radius: ['35%', '55%'],
                silent: true,
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: [{
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: '#050f58',
                            shadowBlur: 50,
                            shadowColor: 'rgba(21,41,185,.75)'
                        }
                    }
                }]
            }, {
                name: '占比',
                type: 'pie',
                radius: ['39%', '52%'],
                hoverAnimation: false,

                data: [{
                    value: 52.7,
                    name: "未使用",
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                textStyle: {
                                    fontSize: 15,
                                    fontWeight: "bold"
                                },
                                position: "center"
                            },
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(5,193,255,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(15,15,90,1)'
                            }])
                        }
                    },
                    label: {
                        normal: {
                            position: 'outside',
                            textStyle: {
                                color: '#fff',
                                fontSize: 14
                            },
                            formatter: '{b}: 1,120\n\n{a}: {c}%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 20,
                            length2: 30,
                            smooth: false,
                            lineStyle: {
                                width: 1,
                                color: "#2141b5"
                            }
                        }
                    }
                }, {
                    value: 47.3,
                    name: "已使用",
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                textStyle: {
                                    fontSize: 15,
                                    fontWeight: "bold"
                                },
                                position: "center"
                            },
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(5,15,88,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(235,122,255,1)'
                            }])
                        }
                    },
                    label: {
                        normal: {
                            position: 'outside',
                            textStyle: {
                                color: '#fff',
                                fontSize: 14
                            },
                            formatter: '{b}: 1,120\n\n{a}: {c}%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 20,
                            length2: 40,
                            smooth: false,
                            lineStyle: {
                                width: 1,
                                color: "#2141b5"
                            }
                        }
                    }
                }]
            }, {
                name: '',
                type: 'pie',
                clockWise: true,
                hoverAnimation: false,
                radius: [200, 200],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 0,
                    label: {
                        normal: {
                            formatter: data.data,
                            textStyle: {
                                color: '#fe8b53',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }
                        }
                    }
                }, {
                    tooltip: {
                        show: false
                    },
                    label: {
                        normal: {
                            //formatter: '\n使用率',
                            textStyle: {
                                color: '#bbeaf9',
                                fontSize: 10
                            }
                        }
                    }
                }]
            }]

    }

    }

}