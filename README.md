Node React Stack
======================

Node React Stack is a starter kit project created to help bootstrap a quick prototype or even an real application.

(Under development) Deadline: 11/09/15 (mm/dd/yy)

- Node/Express (Hbs)
- React + React Router + Redux
- Babel 6
- Gulp
- Webpack


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

Run webpack

```ruby
gulp build:webpack
```

Watch jsx to run webpack and watch sass to run gulp sass

```ruby
gulp watch
```

### TODO's

- [ ] Add react hotload (will need to wait a bit https://github.com/gaearon/babel-plugin-react-transform/issues/46)
- [ ] Add React Router
- [ ] Add Redux
- [ ] Add Unit tests Browser env (Karma, Mocha + chai, Sinon).
- [ ] Add Unit tests Node env (Mocha + chai, Sinon).
