import {Row, Col , Typography } from 'antd';
import React from 'react';
import {Line} from 'react-chartjs-2';

const {Title} = Typography;

const LineChart = ({coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimeStamp = [];

    for(let i = 0; i < coinHistory?.data?.history?.length; i++)
    {
         coinPrice.push(coinHistory.data.history[i].price);
         coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#9932CC',
                borderColor: '#9932CC'
            }
        ]
    }

    const options = {
        scales: {
            yAxes: {
                ticks: {
                    beginZero: true
                }
            }
        }
    }

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart</Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">Changes: {coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price" >{coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} options={options}/>
        </>
    )
}

export default LineChart
