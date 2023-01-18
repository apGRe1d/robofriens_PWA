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
      // return new Promise((res, rej) => {
      //   setTimeout(() => {
      //     if (!Object.keys(robots).length) {
      //      return rej(new Error('ERROOOOOORR 404'));
      //     }
      //     dispatch({
      //       type: FETCH_ROBOTS,
      //       payload: robots
      //     });
      //   }, 2000);
      // });
      if (!Object.keys(robots).length) {
       throw new Error('ERROOOOOORR 404');
      }
      dispatch({
        type: FETCH_ROBOTS,
        payload: robots
      });
    })
    .catch(err => {
      console.log('CATCH', err);
      dispatch({
        type: FETCH_ROBOTS,
        payload: [],
        error: err
      });
    });
}
