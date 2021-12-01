//import React from "react";
import SignUpNannyStyle from "./signupnanny.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
// import { Select } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function RegisterNanny() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className={SignUpNannyStyle.signupnannyContainer}>
      <div className={SignUpNannyStyle.signupnannyWrapper}>
        <div className={SignUpNannyStyle.signupnannyLogin}>
          <h1 className={SignUpNannyStyle.signupnannyHeader}>Sign Up</h1>
          <h5>to Hi-Parents to continue</h5>
          <div className={SignUpNannyStyle.signupnannyLoginForm}>
            <input
              className={SignUpNannyStyle.signupnannyInput}
              type="text"
              placeholder="Full Name"
              name="full name"
            />

            <input
              className={SignUpNannyStyle.signupnannyInput}
              type="text"
              placeholder="Email Addres"
              name="email"
            />

            <input
              className={SignUpNannyStyle.signupnannyInput}
              type={showPass === false ? "text" : "password" }
              placeholder="Password"
              name="password"
            />

            {showPass ? (
              <VisibilityIcon
                className={SignUpNannyStyle.signupnannyIcon}
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <VisibilityOffIcon
                className={SignUpNannyStyle.signupnannyIcon}
                onClick={() => setShowPass(!showPass)}
              />
            )}

            <Box sx={{ minWidth: 382 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Role
                </InputLabel>
                <NativeSelect
                  defaultValue={"Select Role"}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={"Nanny"}>Nanny</option>
                  <option value={"Parent"}>Parent</option>
                </NativeSelect>
              </FormControl>
            </Box>
            <button className={SignUpNannyStyle.signupnannyButton}>
              Sign Up
            </button>
            <div className={SignUpNannyStyle.signupnannySignin}>
              <p>Already have an account ?</p>
              <a href="loginnanny">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
