import React from 'react';
import './SortingVisualizer.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import getMergeSortAnimation from '../SortingAlgorithms/MergeSort.js';
import getQuickSortAnimation from '../SortingAlgorithms/QuickSort.js';
import getHeapSortAnimation from '../SortingAlgorithms/HeapSort.js';
import getBubbleSortAnimation from '../SortingAlgorithms/BubbleSort.js';
import getInsertionSortAnimation from '../SortingAlgorithms/InsertionSort.js';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            number_array_bars: 100,
            is_visualize_active: false,
            is_running: false,
            current_animation: null,
            animation_speed: 10,
            primary_color: 'rgba(66, 134, 244, 0.8)',
            comparison_color: 'red',
            sorted_color: 'rgba(162, 92, 232, 0.8)',
        };
    }

    componentDidMount() {
        this.resetarray();
    }

    resetarray = async () => {
        const array = [];
        for (let i = 0; i < this.state.number_array_bars; i++) {
            array.push(randomIntFromInterval(10, 730));
        }
        await this.setState({ array });
        const array_bars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < array_bars.length; i++) {
            const bar_style = array_bars[i].style;
            setTimeout(() => {
                bar_style.backgroundColor = this.state.primary_color;
            }, 1);
        }
    }

    handleSliderChange = async (event) => {
        const number_array_bars = event.target.value;
        const animation_speed = 1000 / number_array_bars;
        await this.setState({ number_array_bars, animation_speed });
        this.resetarray();
    };

    handleSelectionChange = async (event) => {
        this.setState({ active: event });
    }

    mergeSortAnimation = async () => {
        await this.setState({ is_running: true });
        const animations = getMergeSortAnimation(this.state.array);
        var change_color = true;
        for (let i = 0; i < animations.length; i++) {
            const array_bars = document.getElementsByClassName('array-bar');
            const animation = animations[i];
            if (animation[0] === 'compare') {
                const bar_one_idx = animation[1];
                const bar_two_idx = animation[2];
                const bar_one_style = array_bars[bar_one_idx].style;
                const bar_two_style = array_bars[bar_two_idx].style;
                console.log(bar_one_style.backgroundColor);
                const color = change_color ? this.state.comparison_color : this.state.primary_color;
                change_color = change_color ? false : true;
                setTimeout(() => {
                    bar_one_style.backgroundColor = color;
                    bar_two_style.backgroundColor = color;
                }, i * this.state.animation_speed);
            } else {
                const bar_idx = animation[1];
                const new_height = animation[2];
                const bar_style = array_bars[bar_idx].style;
                setTimeout(() => {
                    bar_style.height = `${new_height}px`;
                }, i * this.state.animation_speed);
            }
        }
        const array_bars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < array_bars.length; i++) {
            const bar_sorted_style = array_bars[i].style;
            setTimeout(() => {
                bar_sorted_style.backgroundColor = this.state.sorted_color;
            }, (animations.length + i) * this.state.animation_speed);
        }
        await setTimeout(() => {
            this.setState({ is_running: false });
        }, (animations.length + array_bars.length) * this.state.animation_speed);
    }

    quickSortAnimation = async () => {
        await this.setState({ is_running: true });
        const animations = getQuickSortAnimation(this.state.array);
        var change_color = true;
        for (let i = 0; i < animations.length; i++) {
            const array_bars = document.getElementsByClassName('array-bar');
            const animation = animations[i];
            if (animation[0] === 'compare') {
                const bar_one_idx = animation[1];
                const bar_two_idx = animation[2];
                const bar_one_style = array_bars[bar_one_idx].style;
                const bar_two_style = array_bars[bar_two_idx].style;
                console.log(bar_one_style.backgroundColor);
                const color = change_color ? this.state.comparison_color : this.state.primary_color;
                change_color = change_color ? false : true;
                setTimeout(() => {
                    bar_one_style.backgroundColor = color;
                    bar_two_style.backgroundColor = color;
                }, i * this.state.animation_speed);
            } else if (animation[0] === 'change-height') {
                const bar_one_idx = animation[1];
                const new_height = animation[2];
                const bar_one_style = array_bars[bar_one_idx].style;
                setTimeout(() => {
                    bar_one_style.height = `${new_height}px`;
                }, i * this.state.animation_speed);
            } else {
                const bar_idx = animation[1];
                const bar_last_sorted_style = array_bars[bar_idx].style;
                setTimeout(() => {
                    bar_last_sorted_style.backgroundColor = this.state.sorted_color;
                }, i * this.state.animation_speed);
            }
        }
        await setTimeout(() => {
            this.setState({ is_running: false });
        }, (animations.length) * this.state.animation_speed);
    }

    heapSortAnimation = async () => {
        await this.setState({ is_running: true });
        const animations = getHeapSortAnimation(this.state.array);
        var change_color = true;
        for (let i = 0; i < animations.length; i++) {
            const array_bars = document.getElementsByClassName('array-bar');
            const animation = animations[i];
            if (animation[0] === 'compare') {
                const bar_one_idx = animation[1];
                const bar_two_idx = animation[2];
                const bar_one_style = array_bars[bar_one_idx].style;
                const bar_two_style = array_bars[bar_two_idx].style;
                console.log(bar_one_style.backgroundColor);
                const color = change_color ? this.state.comparison_color : this.state.primary_color;
                change_color = change_color ? false : true;
                setTimeout(() => {
                    bar_one_style.backgroundColor = color;
                    bar_two_style.backgroundColor = color;
                }, i * this.state.animation_speed);
            } else if (animation[0] === 'change-height') {
                const bar_one_idx = animation[1];
                const new_height = animation[2];
                const bar_one_style = array_bars[bar_one_idx].style;
                setTimeout(() => {
                    bar_one_style.height = `${new_height}px`;
                }, i * this.state.animation_speed);
            } else {
                const bar_idx = animation[1];
                const bar_last_sorted_style = array_bars[bar_idx].style;
                setTimeout(() => {
                    bar_last_sorted_style.backgroundColor = this.state.sorted_color;
                }, i * this.state.animation_speed);
            }
        }
        await setTimeout(() => {
            this.setState({ is_running: false });
        }, (animations.length) * this.state.animation_speed);
    }

    bubbleSortAnimation = async () => {
        await this.setState({ is_running: true });
        const animations = getBubbleSortAnimation(this.state.array);
        var change_color = true;
        for (let i = 0; i < animations.length; i++) {
            const array_bars = document.getElementsByClassName('array-bar');
            const animation = animations[i];
            if (animation[0] === 'compare') {
                const bar_one_idx = animation[1];
                const bar_two_idx = animation[2];
                const bar_one_style = array_bars[bar_one_idx].style;
                const bar_two_style = array_bars[bar_two_idx].style;
                console.log(bar_one_style.backgroundColor);
                const color = change_color ? this.state.comparison_color : this.state.primary_color;
                change_color = change_color ? false : true;
                setTimeout(() => {
                    bar_one_style.backgroundColor = color;
                    bar_two_style.backgroundColor = color;
                }, i * this.state.animation_speed);
            } else if (animation[0] === 'change-height') {
                const bar_one_idx = animation[1];
                const new_height = animation[2];
                const bar_one_style = array_bars[bar_one_idx].style;
                setTimeout(() => {
                    bar_one_style.height = `${new_height}px`;
                }, i * this.state.animation_speed);
            } else {
                const bar_idx = animation[1];
                const bar_last_sorted_style = array_bars[bar_idx].style;
                setTimeout(() => {
                    bar_last_sorted_style.backgroundColor = this.state.sorted_color;
                }, i * this.state.animation_speed);
            }
        }
        await setTimeout(() => {
            this.setState({ is_running: false });
        }, (animations.length) * this.state.animation_speed);
    }

    insertionSortAnimation = async () => {
        await this.setState({ is_running: true });
        const animations = getInsertionSortAnimation(this.state.array);
        var change_color = true;
        for (let i = 0; i < animations.length; i++) {
            const array_bars = document.getElementsByClassName('array-bar');
            const animation = animations[i];
            if (animation[0] === 'compare') {
                const bar_one_idx = animation[1];
                const bar_two_idx = animation[2];
                const bar_one_style = array_bars[bar_one_idx].style;
                const bar_two_style = array_bars[bar_two_idx].style;
                console.log(bar_one_style.backgroundColor);
                const color = change_color ? this.state.comparison_color : this.state.primary_color;
                change_color = change_color ? false : true;
                setTimeout(() => {
                    bar_one_style.backgroundColor = color;
                    bar_two_style.backgroundColor = color;
                }, i * this.state.animation_speed);
            } else {
                const bar_one_idx = animation[1];
                const new_height = animation[2];
                const bar_one_style = array_bars[bar_one_idx].style;
                setTimeout(() => {
                    bar_one_style.height = `${new_height}px`;
                }, i * this.state.animation_speed);
            }
        }
        const array_bars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < array_bars.length; i++) {
            const bar_sorted_style = array_bars[i].style;
            setTimeout(() => {
                bar_sorted_style.backgroundColor = this.state.sorted_color;
            }, (animations.length + i) * this.state.animation_speed);
        }
        await setTimeout(() => {
            this.setState({ is_running: false });
        }, (animations.length + array_bars.length) * this.state.animation_speed);
    }

    render() {
        const { array, number_array_bars, is_running, is_visualize_active, primary_color } = this.state;
        const width = Math.floor(window.innerWidth / (number_array_bars * 3));

        return (
            <div className="sorting-visualizer">
                <div className="bars">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: primary_color,
                                height: `${value}px`,
                                width: `${width}px`,
                            }}></div>
                    ))}
                </div>
                <Navbar collapseOnSelect expand="lg" variant="light" className="color-nav" fixed="bottom">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navoption">
                            <Button className="options" onClick={this.resetarray} 
                                    disabled={is_running ? "disabled" : null}>Create new array</Button>
                        </Nav>
                        <div className="seperator"></div>
                        <Nav className="navoption">
                            <Button className="sizeoption" disabled={is_running ? "disabled" : null}>
                                Change array size &amp; Sorting speed
                            </Button>
                            <div className="slider-container">
                                <input className="slider" type="range" min="10" max="300" 
                                        value={number_array_bars} onChange={this.handleSliderChange} 
                                        disabled={is_running ? "disabled" : null} />
                            </div>
                        </Nav>
                        <div className="seperator"></div>
                        <Nav className="navoption">
                            <Button className="visualize" onClick={this.state.current_animation}
                                        disabled={is_running || !is_visualize_active ? "disabled" : null}>
                                Visualize
                            </Button>
                        </Nav>
                        <div className="seperator"></div>
                        <Nav className="navoption">
                            <Button id="merge-sort" className="options" onClick={async () => {
                                await this.setState(
                                    { current_animation: this.mergeSortAnimation, is_visualize_active: true });
                                if (this.state.active)
                                    document.getElementById(this.state.active).setAttribute("style", "background-color: none !important");
                                this.handleSelectionChange("merge-sort");
                                document.getElementById("merge-sort").setAttribute("style", "background-color: #BA3A47 !important");
                            }} disabled={is_running ? "disabled" : null}>Merge Sort</Button>
                        </Nav>
                        <Nav className="navoption">
                            <Button id="quick-sort" className="options" onClick={async () => {
                                await this.setState(
                                    { current_animation: this.quickSortAnimation, is_visualize_active: true });
                                if (this.state.active)
                                    document.getElementById(this.state.active).setAttribute("style", "background-color: none !important");
                                this.handleSelectionChange("quick-sort");
                                document.getElementById("quick-sort").setAttribute("style", "background-color: #BA3A47 !important");
                            }} disabled={is_running ? "disabled" : null}>Quick Sort</Button>
                        </Nav>
                        <Nav className="navoption">
                            <Button id="heap-sort" className="options" onClick={async () => {
                                await this.setState(
                                    { current_animation: this.heapSortAnimation, is_visualize_active: true });
                                if (this.state.active)
                                    document.getElementById(this.state.active).setAttribute("style", "background-color: none !important");
                                this.handleSelectionChange("heap-sort");
                                document.getElementById("heap-sort").setAttribute("style", "background-color: #BA3A47 !important");
                            }} disabled={is_running ? "disabled" : null}>Heap Sort</Button>
                        </Nav>
                        <Nav className="navoption">
                            <Button id="bubble-sort" className="options" onClick={async () => {
                                await this.setState(
                                    { current_animation: this.bubbleSortAnimation, is_visualize_active: true });
                                if (this.state.active)
                                    document.getElementById(this.state.active).setAttribute("style", "background-color: none !important");
                                this.handleSelectionChange("bubble-sort");
                                document.getElementById("bubble-sort").setAttribute("style", "background-color: #BA3A47 !important");
                            }} disabled={is_running ? "disabled" : null}>Bubble Sort</Button>
                        </Nav>
                        <Nav className="navoption">
                            <Button id="insertion-sort" className="options" onClick={async () => {
                                await this.setState(
                                    { current_animation: this.insertionSortAnimation, is_visualize_active: true });
                                if (this.state.active)
                                    document.getElementById(this.state.active).setAttribute("style", "background-color: none !important");
                                this.handleSelectionChange("insertion-sort");                          
                                document.getElementById("insertion-sort").setAttribute("style", "background-color: #BA3A47 !important");
                            }} disabled={is_running ? "disabled" : null}>Insertion Sort</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}