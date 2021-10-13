import _ from "lodash";
import { fetchPosts } from "./fetchPosts";
import { fetchUser } from "./fetchUser";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

//   const userIds = _.uniq(_.map(getState().posts, "userId"));
//   userIds.forEach(userId => dispatch(fetchUser(userId)));

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(userId => dispatch(fetchUser(userId)))
    .value();
};
