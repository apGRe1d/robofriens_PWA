import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

export const requestRobots = (httpString) => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  return new Promise((res, rej) => {
    fetch(httpString)
      .then(response => {
        return new Promise (res => {
          setTimeout(() => {
            return res(response.json());
          }, 1000);
        })
      })
      .then(robots => {
        if (!Object.keys(robots).length) {
          throw new Error('ERROOOOOORR 404');
        }
        dispatch({
          type: REQUEST_ROBOTS_SUCCESS,
          payload: robots
        });
        res(robots);
      })
      .catch(err => {
        console.log('CATCH', err);
        dispatch({
          type: REQUEST_ROBOTS_FAILED,
          payload: [],
          error: err
        });
        rej(err);
      });
  })
    .catch(err => {
      console.log('FAILED TO FETCH', err);
    })
}
