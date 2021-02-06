import React, { Component } from 'react';


import './index.css';
const tiledHexagons = require('tiled-hexagons')
const { Hexagon, TiledHexagons } = tiledHexagons;

//https://josephsurin.github.io/tiled-hexagons/ [check, need to make an invisigon]
//https://www.npmjs.com/package/tiled-hexagons
//https://www.npmjs.com/package/react-live-clock
//https://www.npmjs.com/package/rc-notification

export const Homescreen = () => {
    return (
        <>
            <div id="bg-container">
                <canvas id="bg-canvas"></canvas>

                <div id="core-wrapper">
                    <div id="core-notifications"></div>

                    <div id="core-buttons">
                        <TiledHexagons
                            tileSideLengths={60}
                            tileGap={7}
                            tileBorderRadii={2}
                            maxHorizontal={4}
                            tileTextStyles={{
                                fontFamily: 'Source Sans Pro',
                                fontSize: '68px',
                                fill: '#7cebff'
                            }}
                            tiles={[
                                {
                                    text: 'あ',
                                    textStyle: {
                                        fontFamily: 'M1Plus'
                                    },
                                    hidden:true
                                },{
                                    text: 'あ',
                                    textStyle: {
                                        fontFamily: 'M1Plus'
                                    }
                                },{
                                    text: 'あ',
                                    textStyle: {
                                        fontFamily: 'M1Plus'
                                    }
                                },{
                                    text: 'あ',
                                    textStyle: {
                                        fontFamily: 'M1Plus'
                                    },
                                    hidden:true
                                },{
                                    text: 'あ',
                                    textStyle: {
                                        fontFamily: 'M1Plus'
                                    }
                                },
                                {
                                    text: 'B',
                                    textStyle: {
                                        fill: 'white'
                                    },
                                    fill: '#7cebff',
                                    shadow: '#64c5d6'
                                },
                                { img: 'assets/react.svg' },
                                {
                                    text: 'angry',
                                    textStyle: {
                                        fontFamily: 'Font Awesome Solid'
                                    }
                                },
                                {
                                    text: 'E',
                                    onClick: () => console.log('clicked!')
                                },
                                { text: '😼' },
                                { text: 'G' }
                            ]}
                        />
                    </div>


                    <div id="core-clock"></div>
                </div>
            </div>



        </>
    );
}