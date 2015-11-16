Node React Stack starter kit
======================

This project is a starter kit project created to quickly help bootstrap an Application with the tech stack listed below.

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

### Prerequisite

- Node.js v5.0

### How to use

To install dependencies

```ruby
sudo npm install
```

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

Build SASS and JS to production

```ruby
gulp build
```

### TODO's

- [ ] Add react hotload (will need to wait a bit https://github.com/gaearon/babel-plugin-react-transform/issues/46)
