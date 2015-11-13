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

- [ ] Improve documentation (intro and plugins)
- [ ] Add react hotload (will need to wait a bit https://github.com/gaearon/babel-plugin-react-transform/issues/46)
