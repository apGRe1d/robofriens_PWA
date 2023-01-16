import {CHANGE_SEARCH_FIELD, FETCH_ROBOTS} from './constants';
import {combineReducers} from 'redux';

const initialState = {
  searchField: '',
  robots: []
}

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {...state, searchField: action.payload};
    case FETCH_ROBOTS:
      return {...state, robots: action.payload};
    default:
      return state
  }
}

export const combinedReducers = combineReducers({
  searchRobots
})
