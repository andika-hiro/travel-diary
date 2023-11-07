// loginReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, RESET_LOGIN } from "./constants";
import { produce } from "immer";

const initialState = {
  user: null,
  error: null,
};

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.user = null;
        draft.error = null;
        break;
      case LOGIN_SUCCESS:
        draft.user = action.payload;
        draft.error = null;
        break;
      case LOGIN_FAILURE:
        draft.user = null;
        draft.error = action.payload;
        break;
      case RESET_LOGIN:
        draft.user = null;
        draft.error = null;
    }
  });

export default loginReducer;
