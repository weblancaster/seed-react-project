Node React Stack
======================

Node React Stack is a starter kit project created to help bootstrap a quick application.

- Node/Express (Hbs)
- React + React Router + Redux
- Babel 6
- Gulp
- Webpack
- Unit tests (Karma + Mocha + Chai + Sinon)


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
