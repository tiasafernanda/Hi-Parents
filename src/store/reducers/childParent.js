import {
  POST_CHILD_BEGIN,
  POST_CHILD_SUCCESS,
  POST_CHILD_FAIL,
  POST_PARENTCHILD_BEGIN,
  POST_PARENTCHILD_SUCCESS,
  POST_PARENTCHILD_FAIL,
} from "../actions/types";

const initialState = {
  login: [],
  loading: false,
  error: null,
  detailDashboarChild: {
    loading: false,
    error: null,
    details: {},
  },
};

const childParent= (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case POST_CHILD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_CHILD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        login: payload,
      };
    case POST_CHILD_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        login: [],
      };
    case POST_PARENTCHILD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_PARENTCHILD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        login: payload,
      };
    case POST_PARENTCHILD_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        login: [],
      };
  }
};

export default childParent;
