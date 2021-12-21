import {
    PUT_PARENT_BEGIN,
    PUT_PARENT_SUCCESS,
    PUT_PARENT_FAIL,
  } from "../actions/types";
  
  const initialState = {
    login: [],
    loading: false,
    error: null,
    detailDashboarParent: {
      loading: false,
      error: null,
      details: {},
    },
  };
  
  const parent = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      default:
        return {
          ...state,
        };
      case PUT_PARENT_BEGIN:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case PUT_PARENT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          login: payload,
        };
      case PUT_PARENT_FAIL:
        return {
          ...state,
          loading: false,
          error: error,
          login: [],
        };
    }
  };
  
  export default parent;
  