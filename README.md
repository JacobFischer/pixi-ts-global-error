# pixi.js TypeScript global error

To demo the bug in https://github.com/pixijs/pixi.js/issues/6445

## How to

1. clone this gist `git clone git@github.com:JacobFischer/pixi-ts-global-error.git`
2. `npm install`
3. `npm run build`
4. This should create a `dist/` directory, load up `dist/index.html` in a browser
5. see the following error in the console:

```
Uncaught ReferenceError: PIXI is not defined
    at eval (index.ts:5)
    at Object../index.ts (index_bundle.js:96)
    at __webpack_require__ (index_bundle.js:20)
    at index_bundle.js:84
    at index_bundle.js:87
```
