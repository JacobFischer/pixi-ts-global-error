import { utils } from "pixi.js";

// This will work
utils.skipHello();

console.log("About to use 'PIXI' which is not globally defined");

// Because we imported the "pixi.js" package, there is a side-effect where
// all the pixi.js types polluted the global namespace, however none
// actually exist globally at run time.
// So, this line will blow up.
const sprite = new PIXI.Sprite();

console.log("I will never run!", sprite);
