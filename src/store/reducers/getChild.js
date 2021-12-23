import {
    GET_GETDATACHILD_BEGIN,
    GET_GETDATACHILD_SUCCESS,
    GET_GETDATACHILD_FAIL,
  } from "../actions/types";
  
  const initialState = {
    profileChild: [],
    loading: false,
    error: null,
  };
  const getChild = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      default:
        return {
          ...state,
        };
      case GET_GETDATACHILD_BEGIN:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_GETDATACHILD_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          profileChild: payload,
        };
      case GET_GETDATACHILD_FAIL:
        return {
          ...state,
          loading: false,
          error: error,
          profileChild: [],
        };
    }
  };
  
  export default getChild;
  