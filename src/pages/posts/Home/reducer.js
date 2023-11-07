import { produce } from "immer";
import { SET_ALL_POST, SET_NEW_POST } from "./constants";

export const initialState = {
  posts: [],
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POST:
        draft.posts = action.posts;
        break;
      case SET_NEW_POST:
        const newPost = [...state.posts, action.post];
        draft.posts = newPost;
        break;
    }
  });

export default homeReducer;
