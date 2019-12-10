import { 
  CHANGE_SERACH_FIELD,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
  REQUEST_ROBOTS_PENDING
} 
from './types';

export const setSearchField = text => ({
  type: CHANGE_SERACH_FIELD,
  payload: text
});

// Higher order function (func. that returns func)
export const requestRobots = () => dispatch => {
  dispatch({
    type: REQUEST_ROBOTS_PENDING
  });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({
      type: REQUEST_ROBOTS_SUCCESS,
      payload: data
    }))
    .catch(err => dispatch({
      type: REQUEST_ROBOTS_FAIL,
      payload: err
    }))
};