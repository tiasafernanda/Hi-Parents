import {
  GET_GETDATAPARENT_BEGIN,
  GET_GETDATAPARENT_SUCCESS,
  GET_GETDATAPARENT_FAIL,
} from "../actions/types";

const initialState = {
  profile: [],
  loading: false,
  error: null,
};
const getParent = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_GETDATAPARENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_GETDATAPARENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        profile: payload,
      };
    case GET_GETDATAPARENT_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        profile: [],
      };
  }
};

export default getParent;
