import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants';

import {combineReducers} from 'redux';

const initialStateSearch = {
  searchField: '',
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {...state, searchField: action.payload};
    default:
      return state
  }
}

const initialStateRobots = {
  robots: [],
  isPending: false
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {...state, isPending: true}
    case REQUEST_ROBOTS_FAILED:
      return {...state, isPending: false, robots: action.payload}
    case REQUEST_ROBOTS_SUCCESS:
      return {...state, isPending: false, robots: action.payload, error: action.error}
    default:
      return state;
  }
}

export const combinedReducers = combineReducers({
  searchRobots,
  requestRobots
})
