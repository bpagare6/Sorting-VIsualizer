import React from 'react';
import './SortingVisualizer.css';
import create_new_array from './create_new_array.png';
import random_array from './random_array.png';
import change_size_speed from './change_size_speed.gif';
import select_algorithm from './select_algorithm.gif';
import visualize from './visualize.gif';

export default class Tutorial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        };
    }

    next_tutorial = async () => {
        if (this.state.counter < 7) {
            await this.setState({ counter: this.state.counter + 1 });
        }
    }

    previous_tutorial = async () => {
        if (this.state.counter > 1) {
            await this.setState({ counter: this.state.counter - 1 });
        }
    }

    skip_tutorial = () => {
        document.getElementsByClassName("tutorial")[0].setAttribute("style", "display: none");
    }

    finish_tutorial = () => {
        document.getElementsByClassName("tutorial")[0].setAttribute("style", "display: none");
    }

    render() {
        const { counter } = this.state;

        return (
            <div className="tutorial-screen">
                {(() => {
                    if (counter === 1) {
                        return (
                            <div className="tutorial">
                                <h3>Welcome to Sorting Visualizer!</h3>
                                <h6>This short tutorial will walk you through all of the features of this application.</h6>
                                <p>If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!</p>
                                <img id="mainTutorialImage" src="https://visualgo.net/img/png/sorting.png" alt="sample" />
                                <div id="tutorialCounter">1/7</div>
                                <button id="nextButton" class="btn btn-default navbar-btn" type="button" onClick={this.next_tutorial}>Next</button>
                                <button id="skipButton" class="btn btn-default navbar-btn" type="button" onClick={this.skip_tutorial}>Skip Tutorial</button>
                            </div>
                        );
                    } else if (counter === 2) {
                        return (
                            <div className="tutorial">
                                <h3>What is Sorting?</h3>
                                <h6>At its core, it refers to ordering data in an increasing or decreasing fashion.</h6>
                                <ul>
                                    <b style={{ fontSize: "18px" }}>Merge Sort</b>
                                    <li>In this method, the elements are divided into partitions until each partition has sorted elements.
                                    Then, these partitions are merged and the elements are properly positioned to get a fully sorted list.</li>
                                    <b style={{ fontSize: "18px" }}>Quick Sort</b>
                                    <li>In this method, an element called pivot is identified and that element is fixed in its place by moving
                                    all the elements less than that to its left and all the elements greater than that to its right.</li>
                                    <b style={{ fontSize: "18px" }}>Heap Sort</b>
                                    <li>In this method, the file to be sorted is interpreted as a binary tree.
                                    Array, which is a sequential representation of binary tree, is used to implement the heap sort. </li>
                                    <b style={{ fontSize: "18px" }}>Bubble Sort</b>
                                    <li>This technique compares last element with the preceding element.
                                    If the last element is less than that of preceding element swapping takes place.</li>
                                    <b style={{ fontSize: "18px" }}>Insertion Sort</b>
                                    <li>In this method, sorting is done by inserting elements into an existing sorted list.
                                    Initially, the sorted list has only one element. Other elements are gradually added into the list in the proper position.</li>
                                </ul>
                                <div id="tutorialCounter">2/7</div>
                                <button id="nextButton" className="btn btn-default navbar-btn" type="button" onClick={this.next_tutorial}>Next</button>
                                <button id="previousButton" className="btn btn-default navbar-btn" type="button" onClick={this.previous_tutorial}>Previous</button>
                                <button id="skipButton" className="btn btn-default navbar-btn" type="button" onClick={this.skip_tutorial}>Skip Tutorial</button>
                            </div>
                        );
                    } else if (counter === 3) {
                        return (
                            <div className="tutorial">
                                <h3>Create a new random array</h3>
                                <img style={{ paddingTop: "50px", paddingBottom: "50px" }} src={create_new_array} alt="Create new array" />
                                <h6>This option allows user to create new random array with size selected as per size option</h6>
                                <img style={{ paddingTop: "10px", width: "45%", height: "45%" }} src={random_array} alt="Random array" />
                                <div id="tutorialCounter">3/7</div>
                                <button id="nextButton" class="btn btn-default navbar-btn" type="button" onClick={this.next_tutorial}>Next</button>
                                <button id="previousButton" class="btn btn-default navbar-btn" type="button" onClick={this.previous_tutorial}>Previous</button>
                                <button id="skipButton" class="btn btn-default navbar-btn" type="button" onClick={this.skip_tutorial}>Skip Tutorial</button>
                            </div>
                        );
                    } else if (counter === 4) {
                        return (
                            <div className="tutorial">
                                <h3>Change array size &amp; Sorting size</h3>
                                <img style={{ paddingTop: "50px", paddingBottom: "50px" }} src={change_size_speed} alt="Change the size and speed" />
                                <h6>This option can be used to increase or decrease the size of array to be sort and change the speed of sorting</h6>
                                <div id="tutorialCounter">4/7</div>
                                <button id="nextButton" class="btn btn-default navbar-btn" type="button" onClick={this.next_tutorial}>Next</button>
                                <button id="previousButton" class="btn btn-default navbar-btn" type="button" onClick={this.previous_tutorial}>Previous</button>
                                <button id="skipButton" class="btn btn-default navbar-btn" type="button" onClick={this.skip_tutorial}>Skip Tutorial</button>
                            </div>
                        );
                    } else if (counter === 5) {
                        return (
                            <div className="tutorial">
                                <h3>Select the algorithm</h3>
                                <img style={{ paddingTop: "50px", paddingBottom: "50px" }} src={select_algorithm} alt="Select algorithm" />
                                <h6>Select the algorithm that you want to visualize</h6>
                                <div id="tutorialCounter">5/7</div>
                                <button id="nextButton" class="btn btn-default navbar-btn" type="button" onClick={this.next_tutorial}>Next</button>
                                <button id="previousButton" class="btn btn-default navbar-btn" type="button" onClick={this.previous_tutorial}>Previous</button>
                                <button id="skipButton" class="btn btn-default navbar-btn" type="button" onClick={this.skip_tutorial}>Skip Tutorial</button>
                            </div>
                        );
                    } else if (counter === 6) {
                        return (
                            <div className="tutorial">
                                <h3>Time to visualize!</h3>
                                <h6>Press the visualize button to start visualization of selected algorithm</h6>
                                <img style={{ paddingTop: "5px", paddingBottom: "50px", height: "75%" }} src={visualize} alt="Visualize" />
                                <div id="tutorialCounter">6/7</div>
                                <button id="nextButton" class="btn btn-default navbar-btn" type="button" onClick={this.next_tutorial}>Next</button>
                                <button id="previousButton" class="btn btn-default navbar-btn" type="button" onClick={this.previous_tutorial}>Previous</button>
                                <button id="skipButton" class="btn btn-default navbar-btn" type="button" onClick={this.skip_tutorial}>Skip Tutorial</button>
                            </div>
                        );
                    } else if (counter === 7) {
                        return (
                            <div className="tutorial">
                                <h3>Enjoy!</h3>
                                <h6>I hope you will have as much fun playing around with this visualization tool as I had building it!</h6>
                                <p>If you want to see the source code for this application, check out my &nbsp;<a href="https://github.com/bpagare6/Sorting-Visualizer">github</a>.</p>
                                <div id="tutorialCounter">7/7</div>
                                <button id="nextButton" class="btn btn-default navbar-btn" type="button" onClick={this.finish_tutorial}>Finish</button>
                                <button id="previousButton" class="btn btn-default navbar-btn" type="button" onClick={this.previous_tutorial}>Previous</button>
                                <button id="skipButton" class="btn btn-default navbar-btn" type="button" onClick={this.skip_tutorial}>Skip Tutorial</button>
                            </div>
                        );
                    }
                })()}
            </div>
        );
    }
}