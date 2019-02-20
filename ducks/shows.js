import fetch from 'isomorphic-unfetch';

// Actions
const FETCH_SHOWS = 'FETCH_SHOWS';
export const fetchShows = () => async dispatch => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  dispatch({
    type: `${FETCH_SHOWS}_SUCCESS`,
    data,
  });
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case `${FETCH_SHOWS}_SUCCESS`: {
      return {
        ...state,
        shows: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
