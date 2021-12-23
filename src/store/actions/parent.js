import { PUT_PARENT_BEGIN, PUT_PARENT_SUCCESS } from "./types";


export const ParentAction = (body) => {
  return {
    type: PUT_PARENT_BEGIN,
    body,
  };
};

// export const ParentActionSuccess = (body) => {
//   return {
//     type: PUT_PARENT_SUCCESS,
//     body,
//   };
// };

