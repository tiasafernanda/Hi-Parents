import {
    LOGINNANNY_BEGIN
  } from "./types";

import {
  REGISTERNANNY_BEGIN
} from "./types"
  
  export const LoginNannyAction = (body) => {
    return {
      type: LOGINNANNY_BEGIN,
      body
    };
  };

  export const RegisterNannyAction = (body) => {
    return {
      type: REGISTERNANNY_BEGIN,
      body
    };
  };
  