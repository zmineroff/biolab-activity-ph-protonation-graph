/**
 * @fileoverview Sketch class for use with the Biolab activity suite.
 * @copyright Carnegie Mellon University 2019
 * @author mouse@cmu.edu (Meg Richards)
 */

import 'p5.play';
import Beaker from 'p5.beaker/beaker.js';
import ConjugateBase from 'p5.beaker/conjugate_base.js';
import Proton from 'p5.beaker/proton.js';

/**
 * A Biolab sketch
 * @class Sketch
 */
export default function Sketch(p) {
    let beaker = null;

    p.preload = function() {
        Beaker.prototype.preload(p);
        ConjugateBase.prototype.preload(p);
        Proton.prototype.preload(p);
    }

    p.setup = function() {
        p.createCanvas(343,322);
        p.background(255,255,255);
        beaker = new Beaker(p,286,278,0,0,38,34);
        beaker.addParticles(Proton,10);
        beaker.addParticles(ConjugateBase,10);
    };

    p.draw = function() {
        beaker.step();
        beaker.draw();
    };
}
