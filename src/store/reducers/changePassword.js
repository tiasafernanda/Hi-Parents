import {
  CHANGEPASSWORD_BEGIN,
  CHANGEPASSWORD_SUCCESS,
  CHANGEPASSWORD_FAIL,
} from "../actions/types";

const initialState = {
  login: [],
  loading: false,
  error: null,
  detailChangePassword: {
    loading: false,
    error: null,
    details: {},
  },
};

const updatePassword = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case CHANGEPASSWORD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CHANGEPASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        login: payload,
      };
    case CHANGEPASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        login: [],
      };
  }
};

export default updatePassword;
