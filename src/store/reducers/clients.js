import {
  GET_CLIENTS_BEGIN,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAIL,
  GET_ACTIVE_CLIENTS_BEGIN,
  GET_ACTIVE_CLIENTS_FAIL,
  GET_ACTIVE_CLIENTS_SUCCESS,
  GET_CLIENT_DETAIL_BEGIN,
  GET_CLIENT_DETAIL_FAIL,
  GET_CLIENT_DETAIL_SUCCESS,
  GET_MAIN_CLIENTS_BEGIN,
  GET_MAIN_CLIENTS_FAIL,
  GET_MAIN_CLIENTS_SUCCESS,
} from '../actions/types';

const initialState = {
  mainClients: [],
  clients: [],
  loading: false,
  error: null,
  activeClient: [],
  clientDetail: {
    loading: false,
    error: null,
    details: {},
  },
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
    case GET_MAIN_CLIENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_MAIN_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        mainClients: payload,
      };
    case GET_MAIN_CLIENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        mainClients: [],
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
    case GET_CLIENT_DETAIL_BEGIN:
      return {
        ...state,
        clientDetail: {
          loading: true,
          error: null,
        },
      };
    case GET_CLIENT_DETAIL_SUCCESS:
      return {
        ...state,
        clientDetail: {
          loading: false,
          error: null,
          details: payload,
        },
      };
    case GET_CLIENT_DETAIL_FAIL:
      return {
        ...state,
        clientDetail: {
          loading: false,
          error: null,
          details: {},
        },
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
