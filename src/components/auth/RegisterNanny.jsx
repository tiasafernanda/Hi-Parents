//import React from "react";
import SignUpNannyStyle from "./signupnanny.module.scss";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import makeStyles from "@material-ui/core/styles/makeStyles";

const top100Films = [{ label: "Nanny" }, { label: "Parent" }];
const useStyles = makeStyles({
  customTextField: {
    "& input::placeholder": {
      fontSize: "20px",
      backgroundColor: "red",
      outline: "#999",
      border: "none",
      borderBottom: "2px #CCC solid",
      width: "24rem",
    },
  },
});

export default function RegisterNanny() {
  const classes = useStyles();
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
              type="text"
              placeholder="Password"
              name="password"
            />

            <Autocomplete
              disablePortal
              //id="combo-box-demo"
              options={top100Films}
              sx={{ width: 385, margin: "2rem" }}
              renderInput={(params) => (
                <TextField
                  classes={{ root: classes.customTextField }}
                  variant="standard"
                  {...params}
                  placeholder="Select role"
                />
              )}
            />

            {/* <input
              className={SignUpNannyStyle.signupnannyInput}
              type="text"
              placeholder="Role"
              name="select role"
            /> */}
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
