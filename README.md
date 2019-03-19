# Biolab Activity Template

This project is a template for activities in the Biolab suite.

## Getting Started

As this project is designed to be a template for a Biolab activity, these instructions will have you create a new activity repo, then get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

git and [npm](https://www.npmjs.com/) must be installed and are assumed to be in your path.

### Installing

On your local machine, create a new activity directory (e.g.: biolab-activity-strong-vs-weak-acid-disassociation) and initialize it as a git repo:

``` 
mkdir biolab-activity-strong-vs-weak-acid-disassociation
cd biolab-activity-strong-vs-weak-acid-disassociation
git init
```

Pull the source from project and then initialize and fetch the configuration submodule:

```
git pull https://github.com/CMUEberlyCenter/biolab-activity-template
git submodule update --init conf/
```

Create a new repository on GitHub.

Add your new repo as the origin of your local repo and push everything there:

```
git remote add origin git-url-of-the-new-repo-you-created
git push -u origin master
```

Install dependencies from npm:

```
npm i
```

Now that the config update dependencies are installed, do a config update and another install in case anything new came from upstream:

```
npm run build:conf
npm i
```

Start the dev server and see a skeleton program running:

```
npm run start
```

and point your browser at the URL it tells you (probably [localhost:8080](http://localhost:8080))

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
