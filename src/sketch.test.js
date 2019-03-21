import Beaker from 'p5.beaker/beaker.js';
import {default as P5} from 'p5';
import Proton from 'p5.beaker/proton.js';
import Sketch from './sketch.js';

test('jest is reasonable',() => {
  expect(2 + 2).toBe(4);
});

let p5_sketch = null;
test('sketch exists',() => {
    p5_sketch = new P5(Sketch,'beaker');
    expect(p5_sketch).toBeDefined();
});
const expect_return_restore = function(spy) {
    expect(spy).toHaveReturned();
    spy.mockRestore();
};
test('sketch setup completes',() => {
    const spy = jest.spyOn(p5_sketch,'setup');
    p5_sketch.setup();
    expect_return_restore(spy);
});
test('sketch draw completes',() => {
    const spy = jest.spyOn(p5_sketch,'draw');
    p5_sketch.draw();
    expect_return_restore(spy);
});

let beaker = null;
test('beaker exists',() => {
    beaker = new Beaker(p5_sketch,286,278,0,40,38,75);
    expect(beaker).toBeTruthy();
});
test('add protons to beaker',() => {
    expect(beaker.particles).toEqual({});
    beaker.addParticles(Proton,2);
    expect(beaker.particles['Proton']['sprites']).toHaveLength(2);
});
