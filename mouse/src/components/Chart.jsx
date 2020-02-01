import echarts from 'echarts/lib/echarts';
import React from 'react';
import 'echarts/lib/chart/line';

export default class Chart extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        const xdata = [];
        for (var i = 0; i < 61; i++) {
            xdata.push(i);
        }
        const myChart = echarts.init(document.getElementById('chart'));
        const option = {
            color: '#46ff84',
            grid: [
                {
                    bottom: '60%'
                },{
                    top: '60%'
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    inverse: true,
                    data: xdata,
                    gridIndex: 0
                },{
                    type: 'category',
                    boundaryGap: false,
                    inverse: true,
                    data: xdata,
                    gridIndex: 1
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    position: 'right',
                    gridIndex: 0
                },{
                    type: 'value',
                    position: 'right',
                    gridIndex: 1
                }
            ],
            series: [
                {
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    areaStyle: {
                        color: '#46ff84'
                    },
                    lineStyle: {
                        color: '#18ff65'
                    },
                    data: this.state.data
                },{
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    areaStyle: {
                        color: '#4aa8ff'
                    },
                    lineStyle: {
                        color: '#1890ff'
                    },
                    data: this.state.data
                }
            ]
        }; 
        myChart.showLoading('default', {
            text: 'loading',
            color: '#46ff84',
            textColor: '#000',
            maskColor: 'rgba(255, 255, 255, 0.8)',
            zlevel: 0
        });
        myChart.setOption(option);
        setTimeout(() => {
            myChart.hideLoading();
            this.changeData(myChart, option);
        }, 2000);
        
    }

    changeData = (myChart, option) => {
        setInterval(() => {
            const datas = this.state.data;
            const random = Math.random() * 100;
            if(datas.length <= 61) {
                datas.unshift(random);
            }else {
                datas.unshift(random);
                datas.pop();
            }
            this.setState({
                data: datas
            });
            myChart.setOption(option);
        }, 1000);
    }

    render() {
        return (
            <div>
                <div id="chart" style={{width: 500, height: 600}}>
                                
                </div>
            </div>
            
        )
    }
}