import { CHANGEPASSWORD_BEGIN } from "./types";

export const ChangePasswordAction = (body) => {
  return {
    type: CHANGEPASSWORD_BEGIN,
    body,
  };
};
