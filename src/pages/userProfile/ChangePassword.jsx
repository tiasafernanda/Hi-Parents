import React from "react";
import style from "./assets/ChangePassword.module.scss";

export default function ChangePassword() {
  return (
    <div className={style.container}>
      <h1>Change Password</h1>
      <div className={style.password}>
        <form>
          <input
            type="text"
            label="Old Password"
            placeholder="Old Password"
            id="outlined-required"
          />
          <input type="text" name="Old Password" placeholder="New Password" />
          <input type="text" name="Old Password" placeholder="Confirm Password" />
        </form>
      </div>
      <div className={style.saveButton}>
        <button
          style={{
            width: "10rem",
            height: "2rem",
            marginLeft: "1rem",
            backgroundColor: "#F67979",
            borderRadius: "2rem",
            border: "none",
            color: "#FFFFFF",
          }}
        >
          Cancel
        </button>
        <button
          style={{
            width: "10rem",
            height: "2rem",
            marginLeft: "1rem",
            backgroundColor: "#10B278",
            borderRadius: "2rem",
            border: "none",
            color: "#FFFFFF", 
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
