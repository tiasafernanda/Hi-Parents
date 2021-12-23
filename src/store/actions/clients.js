import {
  GET_CLIENTS_BEGIN,
  GET_ACTIVE_CLIENTS_BEGIN,
  GET_CLIENT_DETAIL_BEGIN,
  GET_MAIN_CLIENTS_BEGIN,
  UPDATE_STATUS_APPOINTMENT_BEGIN,
  GET_CLIENT_ACCEPTED_BEGIN,
} from './types';

export const getMainClients = () => {
  return {
    type: GET_MAIN_CLIENTS_BEGIN,
  };
};

export const getClients = () => {
  return {
    type: GET_CLIENTS_BEGIN,
  };
};

export const getClientDetail = (appointment_id) => {
  return {
    type: GET_CLIENT_DETAIL_BEGIN,
    appointment_id,
  };
};

export const getActiveClients = () => {
  return {
    type: GET_ACTIVE_CLIENTS_BEGIN,
  };
};

export const getClientAccepted = () => {
  return {
    type: GET_CLIENT_ACCEPTED_BEGIN,
  };
};

export const updateClientAccepted = () => {
  return {
    type: UPDATE_STATUS_APPOINTMENT_BEGIN,
  };
};
