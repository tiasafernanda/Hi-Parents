import { PUT_PARENT_BEGIN } from './types';

export const ParentAction = (body) => {
  return {
    type: PUT_PARENT_BEGIN,
    body,
  };
};
