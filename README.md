Node React Stack
======================

Node React Stack is a starter kit project created to help bootstrap a quick prototype or even an real application.

### Tech Stack

- Node/Express (Hbs)
- React + React Router + Redux
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

- [ ] Improve Webpack configs (Dev, Prod)
- [ ] Improve Gulp (Dev, Prod)
- [ ] Add react hotload
- [ ] Add React Router
- [ ] Add Redux
- [ ] Add Unit tests Browser env (Karma, Mocha + chai, Sinon).
- [ ] Add Unit tests Node env (Mocha + chai, Sinon).
