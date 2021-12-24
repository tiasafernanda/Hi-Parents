import {
  GET_CHILDACTIVITYPARENT_BEGIN,
  GET_CHILDACTIVITYPARENT_SUCCESS,
  GET_CHILDACTIVITYPARENT_FAIL,
  GET_CHILDACTIVITYPARENT_DETAIL_BEGIN,
  GET_CHILDACTIVITYPARENT_DETAIL_FAIL,
  GET_CHILDACTIVITYPARENT_DETAIL_SUCCESS,
} from '../actions/types';

const initialState = {
  Activity: [],
  loading: false,
  error: null,
};
const childActivityParent = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_CHILDACTIVITYPARENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CHILDACTIVITYPARENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        Activity: payload,
      };
    case GET_CHILDACTIVITYPARENT_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        Activity: [],
      };
    case GET_CHILDACTIVITYPARENT_DETAIL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CHILDACTIVITYPARENT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        details: payload,
      };
    case GET_CHILDACTIVITYPARENT_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        details: [],
      };
  }
};

export default childActivityParent;
