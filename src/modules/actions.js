import {
  GET_LAUNCH_REQUEST,
  GET_LAUNCH_SUCCESS,
  GET_LAUNCH_FAIL,
} from "./actionTypes";

export const getLaunchListRequest = () => {
  return {
    type: GET_LAUNCH_REQUEST,
  };
};

export const getLaunchListSuccess = (data) => {
  return {
    type: GET_LAUNCH_SUCCESS,
    payload: data,
  };
};

export const getLaunchListFail = (error) => {
  return {
    type: GET_LAUNCH_FAIL,
    payload: error,
  };
};
