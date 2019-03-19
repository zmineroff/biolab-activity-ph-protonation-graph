# Biolab Activity Template
Template for activities using the p5.beaker library.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [npm](https://www.npmjs.com/) - Dependency management
What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```



```
git submodule add https://github.com/CMUEberlyCenter/biolab-config.git conf
git submodule update --init
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
npm run test
```

### And coding style tests

Explain what these tests test and why

```
 npx eslint src/
```

## Building Documentation

```
npm run doc
```

## Deployment

Clean out old files and generate a production bundle:

```
npm run clean
npm run build
```

ESLint must succeed or the build will fail.

The `index.html` and `bundle.js` in `./dist` should be placed in the
same directory. They can be served by any standard webserver or
`index.html` can be opened by a browser using `File > Open File...`.

## Built With

* [p5.js](https://p5js.org/) - The drawing library used
* [p5.play](http://molleindustria.github.io/p5.play/) - Sprite library for p5.js
* [npm](https://www.npmjs.com/) - Dependency management
* [JSDoc](http://usejsdoc.org/) - Used to generate documentation

## Authors

* **Meg Richards** - *Initial work* - [merichar](https://github.com/merichar)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
