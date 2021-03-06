import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

// fetchUsers action
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  
  dispatch({ type: "FETCH_USER", payload: response.data });
}

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

