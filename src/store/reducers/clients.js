import {
  GET_CLIENTS_BEGIN,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAIL,
  GET_ACTIVE_CLIENTS_BEGIN,
  GET_ACTIVE_CLIENTS_FAIL,
  GET_ACTIVE_CLIENTS_SUCCESS,
} from '../actions/types';

const initialState = {
  clients: [],
  loading: false,
  error: null,
  activeClient: [],
  // detailClient: {
  //   loading: false,
  //   error: null,
  //   details: {},
  // },
};

const clients = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_CLIENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        clients: payload,
      };
    case GET_CLIENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        clients: [],
      };
    case GET_ACTIVE_CLIENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ACTIVE_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        activeClient: payload,
      };
    case GET_ACTIVE_CLIENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        activeClient: [],
      };
  }
};

export default clients;
