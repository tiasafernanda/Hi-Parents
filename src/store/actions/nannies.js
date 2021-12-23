import { GET_NANNIES_BEGIN, GET_ACTIVE_NANNIES_BEGIN, GET_APPOINTMENT_BEGIN, GET_CHILD_ACTIVITY_BEGIN, UPDATE_STATUS_APPOINTMENT_BEGIN, GET_NANNIES_ASC_BEGIN } from './types';

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

export const updateAppointmentStatus = () => {
  return {
    type: UPDATE_STATUS_APPOINTMENT_BEGIN,
  };
};

export const getAppointment = () => {
  return {
    type: GET_APPOINTMENT_BEGIN,
  };
};

export const getChildActivity = () => {
  return {
    type: GET_CHILD_ACTIVITY_BEGIN,
  };
};

export const getNanniesAsc = (sort) => {
  return {
    type: GET_NANNIES_ASC_BEGIN,
    sort,
  };
};
