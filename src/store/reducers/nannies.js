import {
  GET_NANNIES_BEGIN,
  GET_NANNIES_SUCCESS,
  GET_NANNIES_FAIL,
  GET_ACTIVE_NANNIES_BEGIN,
  GET_ACTIVE_NANNIES_FAIL,
  GET_ACTIVE_NANNIES_SUCCESS,
  GET_APPOINTMENT_BEGIN,
  GET_APPOINTMENT_FAIL,
  GET_APPOINTMENT_SUCCESS,
} from '../actions/types';

const initialState = {
  nannies: [],
  loading: false,
  error: null,
  // detailNanny: {
  //   loading: false,
  //   error: null,
  //   details: {},
  // },
};

const nannies = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_NANNIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_NANNIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        nannies: payload,
      };
    case GET_NANNIES_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        nannies: [],
      };
    case GET_ACTIVE_NANNIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ACTIVE_NANNIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        activeNanny: payload,
      };
    case GET_ACTIVE_NANNIES_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        activeNanny: [],
      };
    case GET_APPOINTMENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        appointment: payload,
      };
    case GET_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        appointment: [],
      };
  }
};

export default nannies;
