/**
 * @fileoverview Beaker class for use with the acid equilibrium simulation.
 *   Acts as a particle container and manages particle groups.
 * @copyright Carnegie Mellon University 2018
 * @author mouse@cmu.edu (Meg Richards)
 * @author zmineroff@cmu.edu (Zach Mineroff)
 */

import {numAcids,numConjugateBases} from './sketch.js';
import Plotly from 'plotly.js-basic-dist';

/** @module graph */

var fractionProtonated = function() {
    return numAcids/numConjugateBases;
}

var updateRate = 1000;
var cnt = 0;
var maxCnt = 10000;
var interval = setInterval(() => {

    Plotly.extendTraces('graph',{
        "y": [[fractionProtonated()]]
    },[0])

    if (cnt > 10) {
        Plotly.animate('graph',{
            "layout": {
                "xaxis": {"range": [cnt-10,cnt+1]}
            }
        },{
            "transition": {
                "duration": 250,
                "easing": 'cubic-in-out'
            }
        })
    }

    cnt += 1;
    if (cnt >= maxCnt) clearInterval(interval);
},updateRate);

/**
 * A beaker/particle container.
 * @class Graph
 * @param {element_id} - ID of the DOM container.
 */
export default function Graph(element) {
    Plotly.react(element,
                 {
                     "config": {
                         "displaylogo": false,
                         'modeBarButtonsToRemove': ['lasso2d']
                     },
                     "data": [
                         {"line": {"width": 4},
                          "marker": {"color": 'rgb(180,180,180)',"size": 8},
                          "mode": 'lines',
                          "y": [1].map(fractionProtonated)}
                     ],
                     "frames": [],
                     "layout": {
                         "title": "Fraction Protonated Over Time",
                         "xaxis": {"range": [0,10],
                                   "title": 'time'},
                         "yaxis": {"range": [0,1],
                                   "title": 'fraction protonated'}
                     }
                 });

}
