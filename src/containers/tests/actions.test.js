import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from '../../constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import {requestRobots, setSearchField} from '../../actions';
import React from 'react';

const mockStore = configureMockStore([thunkMiddleware]);

it('should  create an action to search robots', function () {
  const text = 'test';
  expect(setSearchField(text)).toEqual({
    type: CHANGE_SEARCH_FIELD,
    payload: 'test'
  });
});

it('check async fetch call PENDING AND SUCCESS', () => {
  const store = mockStore();
  return store.dispatch(requestRobots(
    'https://jsonplaceholder.typicode.com/users'
  ))
    .then((robots) => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: REQUEST_ROBOTS_PENDING
      });
      expect(actions[1]).toEqual({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: robots
      });
    })
});

it('check async fetch call FAILED', () => {
  const store = mockStore();
  return store.dispatch(requestRobots(
    'https://jsonplaceholder.typicode.com/users123'
  ))
    .catch(err => {
      const actions = store.getActions();
      expect(actions[1]).toEqual({
        type: REQUEST_ROBOTS_FAILED,
        payload: [],
        error: err
      });
    });
});
