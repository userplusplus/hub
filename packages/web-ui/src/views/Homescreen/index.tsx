import React, { Component } from 'react';

import './index.css';

export const Homescreen = () => {
    return (
        <>
            <div id="bg-container">
                <div id="triangle-topleft"></div>
                <div id="triangle-botright"></div>

                <div id="core-wrapper">
                    <div id="core-notifications"></div>
                    <div id="core-buttons">

                        <div id="hex-wrap-bump-top">
                            <ul id="hexGrid">
                                <li className="hex">
                                    <div className="hexIn">
                                        <a className="hexLink" href="#">
                                            <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                                            <h1>This is a title</h1>
                                            <p>Some sample text about the article this hexagon leads to</p>
                                        </a>
                                    </div>
                                </li>
                                <li className="hex">
                                    <div className="hexIn">
                                        <a className="hexLink" href="#">
                                            <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                                            <h1>This is a title</h1>
                                            <p>Some sample text about the article this hexagon leads to</p>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <ul id="hexGrid">
                            <li className="hex">
                                <div className="hexIn">
                                    <a className="hexLink" href="#">
                                        <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                                        <h1>This is a title</h1>
                                        <p>Some sample text about the article this hexagon leads to</p>
                                    </a>
                                </div>
                            </li>
                            <li className="hex">
                                <div className="hexIn">
                                    <a className="hexLink" href="#">
                                        <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                                        <h1>This hex should be blank</h1>
                                        <p>Some sample text about the article this hexagon leads to</p>
                                    </a>
                                </div>
                            </li>
                            <li className="hex">
                                <div className="hexIn">
                                    <a className="hexLink" href="#">
                                        <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                                        <h1>This is a title</h1>
                                        <p>Some sample text about the article this hexagon leads to</p>
                                    </a>
                                </div>
                            </li>
                        </ul>

                        <div id="hex-wrap-bump-bottom">
                            <ul id="hexGrid">
                                <li className="hex">
                                    <div className="hexIn">
                                        <a className="hexLink" href="#">
                                            <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                                            <h1>This is a title</h1>
                                            <p>Some sample text about the article this hexagon leads to</p>
                                        </a>
                                    </div>
                                </li>
                                <li className="hex">
                                    <div className="hexIn">
                                        <a className="hexLink" href="#">
                                            <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                                            <h1>This is a title</h1>
                                            <p>Some sample text about the article this hexagon leads to</p>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div id="core-clock"></div>
                </div>
            </div>



        </>
    );
}