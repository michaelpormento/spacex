import {
  GET_LAUNCH_REQUEST,
  GET_LAUNCH_SUCCESS,
  GET_LAUNCH_FAIL,
} from "./actionTypes";

export const initialState = {
  isLoading: false,
  launchList: [],
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_LAUNCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        launchList: [],
      };
    case GET_LAUNCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        launchList: payload.data,
      };
    case GET_LAUNCH_FAIL:
      return {
        ...state,
        isLoading: false,
        launchList: [],
      };
    default:
      return state;
  }
};

export default reducer;
