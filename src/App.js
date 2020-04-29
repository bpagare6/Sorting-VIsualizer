import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Sorting Visualizer</title>
      </Helmet>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
