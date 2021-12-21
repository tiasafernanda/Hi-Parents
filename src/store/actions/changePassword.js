import { CHANGEPASSWORD_BEGIN } from "./types";

export const ChangePasswordAction = (body) => {
  console.log(body);
  return {
    type: CHANGEPASSWORD_BEGIN,
    body,
  };
};
