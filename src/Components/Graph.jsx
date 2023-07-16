import React, { Component } from 'react';
import { XYPlot, LineSeries, VerticalBarSeries, MarkSeries, RadialChart } from 'react-vis';
import { Stack, Divider, Text,  chakra, } from "@chakra-ui/react";

class Graph extends Component {
    render() {
        const data = [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 3 },
            { x: 8, y: 2 },
            { x: 9, y: 0 }
        ];

        const myData = [{ label: '5times', angle: 8 }, { label: '4times', angle: 3 }, { label: '3times', angle: 2 }, { label: '2times', angle: 1 }, { label: '1time', angle: 2 }, { label: '0 time', angle: 8 }]
        const myBottle = [{ label: '5times', angle: 3 }, { label: '4times', angle: 4 }, { label: '3times', angle: 6 }, { label: '2times', angle: 3 }, { label: '1time', angle: 1 }, { label: '0 time', angle: 7 }]
        const myDeposit = [{ label: '知っている', angle: 10 }, { label: '知らない', angle: 14 }]
        const myUse = [{ label: '利用したことがある', angle: 22 }, { label: '利用したことがない', angle: 2 }]

        return (
            <div className="App">
                <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
                    プラスチックゴミの回収への貢献度
                </chakra.h1>
                <div class="fold">
                    <div class="Card_size">
                        <div class="buble">
                            <p>エコバッグを買い物をする際に持ち歩く</p>
                        </div>
                        <RadialChart
                            data={myData}
                            width={300}
                            height={300}
                            showLabels={true} />
                    </div>
                    <div class="Card_size">
                        <div class="buble">
                            <p>PETを使用せずにマイ水筒を使用する</p>
                        </div>
                        <RadialChart
                            data={myBottle}
                            width={300}
                            height={300}
                            showLabels={true}
                        />
                    </div>
                </div>
                <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
                    デポジット制度の認知度
                </chakra.h1>
                <div class="fold">
                <div class="Card_size">
                    <div class="buble">
                        <p>デポジット制度を知っていますか？</p>
                    </div>
                    <RadialChart
                        data={myDeposit}
                        width={300}
                        height={300}
                        showLabels={true} />
                </div>
                <div class="Card_size">
                    <div class="buble">
                        <p>デポジット制度を利用したことはありますか？</p>
                    </div>
                    <RadialChart
                        data={myUse}
                        width={300}
                        height={300}
                        showLabels={true} />
                </div>
                </div>
            </div>
        );
    }
}

export default Graph;