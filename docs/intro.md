Intro
======================

This is a starter kit project created to quickly help bootstrap an single page application with the tech stack listed below.

- Node/Express (Hbs)
- React + React Router + Redux
- Babel 6
- Gulp
- Webpack
- Unit tests (Karma + Mocha + Chai + Sinon)

It is built to easily add or remove modules.

In a few words of why,

Although the rendering view is Hbs it can be changed to Jade, Swig, React therefore very flexible.

Flux is hard to scale due to managing and maintaining multiple stores, also flux is more a concept than a framework/lib causing devs to implement in a different way using different tools. <br>
Redux besides improving what Flux has as issues Redux is well supported by developers of React community has great dev tools (it’s magical) and because it is a lib/framework(ish) impose structure and good design pattern.

Babel 6 is used to code in ES6/ES2015 enabling developers more power when coding (make our lives easier).

Gulp for the dev/build tasks.

Webpack has a variety of features from custom bundle to deduplication and modular JS/CSS doesn’t matter if is AMD, UMD, CommonJs, Require webpack will understand.
Also well maintained and used by React dev community and companies like Netflix and Walmart.
https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9

### Project structure/architecture

##### Ecosystem

The ecosystem is Node/NPM that way modules can be easily managed therefore we highly recommend using modules registered on NPM.

##### Client Side

The client side stack consist in `React` as our main player, `React-Router` for routing system and `Redux` imposing the Application architecture and managing state container.

```
+-- public //assets necessary for the Client Side (be aware node_modules can have third party modules)
|   +-- build // build from raw assets generated from gulp task
|   |	+-- javascripts
|   |	+-- styles
|   |	+-- vendors
|   +-- images // images/videos/audio?
|   +-- styles
|   |	+-- sass
|   |	|	+-- _components // modules name pattern _moduleName
|   +-- javascripts
|   |	+-- routes.js // config routes for SPA
|   |	+-- actions // action creators
|   |	+-- components // dumb components
|   |	+-- constants // action constants
|   |	+-- containers // smart components/views, responsible to connect store to dumb components through props
|   |	+-- reducers // index being responsible the one to combine all
|   |	+-- store // store configuration
|   +-- vendors // if you can't find what you want available on npm you can add manually here
+-- test // use -spec.js as name pattern to unit tests
```

##### Server Side

Node is used to bootstrap the App from the server. This basic structure is based on express and using Hbs as the templating view

```
+-- bin
|   +-- www // bootstrap app.js
+-- routes // Node routes
+-- app.js // config server
+-- views // Hbs views configured 
|   +-- layout // call for assets (index view)
```

##### Config/Tools

A variety of tools are in use from unit tests to build process and code quality consistency.

```
+-- .babelrc // config for babel 6 which enables ES2015/17 and more
+-- .editorconfig // maintaining consistent coding styles between different editors and IDEs.
+-- .eslintrc // code quality pattern
+-- gulpfile.js // Task/build runner
+-- karma.conf.js // Unit test framework (used in conjunt with Mocha/Chai/Chai and React util tools)
+-- webpack.dev.js // takes modules with dependencies and generates static assets representing those modules for dev environment (uses Babel 6)
+-- webpack.prod.js // takes modules with dependencies and generates static assets representing those modules for prod environment (uses Babel 6)
```

Why?

Although webpack and broserify seems and have some the same concepts you will find here why Webpack is a better choice than Browserify for the problems/projects history/upcoming.

https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9

### Prerequisite

- Node.js v5.0

### How to use

To install dependencies

```ruby
npm install
```

Then

```ruby
npm start
```

Go to http://localhost:3000/

### Development

Compile sass for development

```ruby
gulp sass:dev
```

Compile sass for production

```ruby
gulp sass:prod
```

Run webpack development

```ruby
gulp webpack:dev
```

Run webpack production

```ruby
gulp webpack:prod
```

Watch js to run webpack and watch sass to run gulp sass

```ruby
gulp watch
```

Build SASS, vendors (CSS) and JS to production

```ruby
gulp build
```

