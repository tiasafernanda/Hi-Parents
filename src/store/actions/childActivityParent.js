import { GET_CHILDACTIVITYPARENT_BEGIN, GET_CHILDACTIVITYPARENT_DETAIL_BEGIN } from './types';

export const childActivityParentAction = () => {
  return {
    type: GET_CHILDACTIVITYPARENT_BEGIN,
  };
};

export const childActivityParentDetailAction = (id) => {
  return {
    type: GET_CHILDACTIVITYPARENT_DETAIL_BEGIN,
    id,
  };
};
