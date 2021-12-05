import {
  LOGINNANNY_BEGIN,
  LOGINNANNY_SUCCESS,
  LOGINNANNY_FAIL,
  REGISTERNANNY_BEGIN,
  REGISTERNANNY_SUCCESS,
  REGISTERNANNY_FAIL,
} from "../actions/types";

const initialState = {
  login: [],
  loading: false,
  error: null,
  detailLoginNanny: {
    loading: false,
    error: null,
    details: {},
  },
  detailRegisterNanny: {
    loading: false,
    error: null,
    details: {},
  },
};

const authNanny = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case LOGINNANNY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGINNANNY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        login: payload,
      };
    case LOGINNANNY_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        login: [],
      };
    case REGISTERNANNY_BEGIN:
      return {
        ...state,
        detailRegisterNanny: {
          loading: true,
          error: null,
        },
      };
    case REGISTERNANNY_SUCCESS:
      return {
        ...state,
        detailRegisterNanny: {
          loading: false,
          error: null,
          details: payload,
        },
      };
    case REGISTERNANNY_FAIL:
      return {
        ...state,
        detailRegisterNanny: {
          loading: false,
          error: error,
          details: [],
        },
      };
  }
};

export default authNanny;
