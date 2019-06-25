import './style.css';

import Graph from './graph.js'
import {default as P5} from 'p5'
import Sketch from './sketch.js'

export const p5_sketch = new P5(Sketch,'beaker');
export const p5_graph = new Graph('graph');
