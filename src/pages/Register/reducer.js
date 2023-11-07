import { produce } from "immer";
import { REGISTER_FAILURE, REGISTER_SUCCESS, REGISTER_REQUEST } from "./constants";

const initialState = {
  user: null,
  error: null,
};

const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        draft.user = true;
        draft.error = null;
        break;
      case REGISTER_SUCCESS:
        draft.user = action.payload;
        draft.error = null;
        break;
      case REGISTER_FAILURE:
        draft.user = null;
        draft.error = action.payload;
        break;
    }
  });

export default registerReducer;
