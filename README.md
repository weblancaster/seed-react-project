# Seed React project

This seed was created to rapidly and easily start a React stack project from scratch without the tedious configuration work.

### Main Modules/Feats
- React
    - Hot module reload (https://github.com/gaearon/react-hot-loader)
    - Production performance build (http://stackoverflow.com/questions/22118915/how-to-turn-on-off-reactjs-development-mode)
- Redux (https://github.com/reactjs/redux)
    - Redux-logger (https://github.com/evgenyrodionov/redux-logger)
    - Redux-thunk (https://github.com/gaearon/redux-thunk)
- React Router (https://github.com/ReactTraining/react-router)
- Babel/ES6/7 (https://github.com/babel/babel)
- Webpack (https://github.com/webpack/webpack)
    - Webpack dashboard (https://github.com/FormidableLabs/webpack-dashboard)
    - CSS modules (https://github.com/css-modules/css-modules)
- PostCSS (https://github.com/postcss/postcss)
    - Autoprefixer (https://github.com/postcss/autoprefixer)
    - PostCSS-simple-var (https://github.com/postcss/postcss-simple-vars)
    - PostCSS-partial-import (postcss-partial-import)
- Unit tests/Coverage
    - Jest (https://facebook.github.io/jest/)
    - and React/Redux modules for unit testing

### Project Structure

Redux docs example of folder structure, it's good for todo examples but not for real world application so **(DO NOT FOLLOW THIS PATTERN)**.
```
| src
    | actions
        | all actions files
    | components
        | all components files
    | container
        | all containers files
    | constants
        | often one contant file?
    | reducers
        | all reducers files
    | store
        | one store file
|
```

After building/architecting a couple of React/Redux applications I have found that the structure defined in this repo is the most productive and scalable so far. But as everything there is always space for improvements so please let me know your ideas. **(SUGGESTED PATTERN)**
```
| src
    | index.html
    | index.js (root route file)
    | shared
        | index.reducer.js
        | index.store.js
        | constants.js
        | utils.js
    | featureBla
        | featureBla.actions.js
        | featureBla.container.jsx
        | featureBla.reducer.js
        | featureBla.styles.css
        | test
            | featureBla.actions.test.js
            | featureBla.reducer.test.js
    | core (core UI components)
        | core.css
        | main.component.jsx
        | notFound.component.jsx
        | styles
            | base.css
            | grid.css
|
```
