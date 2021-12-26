import {
  GET_NANNIES_BEGIN,
  GET_ACTIVE_NANNIES_BEGIN,
  GET_APPOINTMENT_BEGIN,
  GET_CHILD_ACTIVITY_BEGIN,
  UPDATE_STATUS_APPOINTMENT_BEGIN,
  GET_CHILD_ACTIVITIES_BEGIN,
  POST_CHILD_ACTIVITIES_BEGIN,
  UPDATE_CHILD_ACTIVITIES_BEGIN,
  DELETE_CHILD_ACTIVITIES_BEGIN,
  GET_NANNY_PROFILE_BEGIN,
  UPDATE_NANNY_PROFILE_BEGIN,
  GET_NANNIES_ASC_BEGIN,
  PAGINATION_ACTIVITY_NANNY_BEGIN,
} from './types';

export const getNannyProfileAction = () => {
  return {
    type: GET_NANNY_PROFILE_BEGIN,
  };
};

export const updateNannyProfileAction = (body) => {
  return {
    type: UPDATE_NANNY_PROFILE_BEGIN,
    body,
  };
};

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

export const updateAppointmentStatus = (body) => {
  return {
    type: UPDATE_STATUS_APPOINTMENT_BEGIN,
    body,
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

export const getChildActivities = (appointment_id) => {
  return {
    type: GET_CHILD_ACTIVITIES_BEGIN,
    appointment_id,
  };
};

export const postChildActivities = (body, appointment_id) => {
  return {
    type: POST_CHILD_ACTIVITIES_BEGIN,
    body,
    appointment_id,
  };
};

export const updateChildActivities = (body, id) => {
  return {
    type: UPDATE_CHILD_ACTIVITIES_BEGIN,
    body,
    id,
  };
};

export const deleteChildActivities = (body) => {
  return {
    type: DELETE_CHILD_ACTIVITIES_BEGIN,
    body,
  };
};

export const paginationActivityAction = (pages) => {
  return {
    type: PAGINATION_ACTIVITY_NANNY_BEGIN,
    pages,
  };
};

export const getNanniesAsc = (sort) => {
  return {
    type: GET_NANNIES_ASC_BEGIN,
    sort,
  };
};
