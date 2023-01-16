import {CHANGE_SEARCH_FIELD, FETCH_ROBOTS} from './constants';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

export const requestRobots = (httpString) => (dispatch) => {
  fetch(httpString)
    .then(response => {
      return response.json();
    })
    .then(robots => {
      setTimeout(() => {
        dispatch({
          type: FETCH_ROBOTS,
          payload: robots
        });
      }, 3000)
    }).catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_ROBOTS,
        payload: [],
        error: err
      });
    });
}
