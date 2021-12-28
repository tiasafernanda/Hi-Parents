import { GET_CHILDACTIVITYPARENT_BEGIN, GET_CHILDACTIVITYPARENT_DETAIL_BEGIN } from './types';

export const childActivityParentAction = (pages) => {
  return {
    type: GET_CHILDACTIVITYPARENT_BEGIN,
    pages
  };
};

export const childActivityParentDetailAction = (id) => {
  return {
    type: GET_CHILDACTIVITYPARENT_DETAIL_BEGIN,
    id,
  };
};
