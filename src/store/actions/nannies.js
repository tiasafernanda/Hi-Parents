import { GET_NANNIES_BEGIN, GET_ACTIVE_NANNIES_BEGIN, GET_APPOINTMENT_BEGIN } from './types';

export const getNannies = () => {
  return {
    type: GET_NANNIES_BEGIN,
  };
};

export const getActiveNannies = () => {
  return {
    type: GET_ACTIVE_NANNIES_BEGIN,
  };
};

export const getAppointment = () => {
  return {
    type: GET_APPOINTMENT_BEGIN,
  };
};


