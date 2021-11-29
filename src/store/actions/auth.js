import {
    LOGINNANNY_BEGIN
  } from "./types";
  
  export const LoginNannyAction = (body) => {
    return {
      type: LOGINNANNY_BEGIN,
      body
    };
  };
  