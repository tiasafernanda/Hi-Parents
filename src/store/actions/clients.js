import { GET_CLIENTS_BEGIN, GET_ACTIVE_CLIENTS_BEGIN, GET_CLIENT_DETAIL_BEGIN } from './types';

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
