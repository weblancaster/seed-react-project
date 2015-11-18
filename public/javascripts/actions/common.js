'use strict';

import 'whatwg-fetch';
import * as types from '../constants/actionTypes'; // import all action types

export function formatContent(json) {
  return {
    type: types.FETCH_CONTENT,
    content: json.data
  }
}

export function fetchContent(path) {
  return (dispatch, getState) => {
    return fetch(`/api/docs/${path}`)
      .then(response => response.json())
      .then(json => {
        dispatch(formatContent(json))
      })
      .catch(err => console.log(`parsing failed ${err}`))
  }
}