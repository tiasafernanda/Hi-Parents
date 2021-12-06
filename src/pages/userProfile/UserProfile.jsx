import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useState } from "react";
import style from "./assets/UserProfile.module.scss";

export default function UserProfile() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  console.log("preview", preview);
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.onerror = () => {
      console.log("error on loading image");
    };
  };
  console.log("image", image);
  const [image1, setImage1] = useState();
  const [preview1, setPreview1] = useState();
  console.log("preview", preview1);
  const handleImage1 = (e) => {
    const file = e.target.files[0];
    setImage1(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview1(reader.result);
    };
    reader.onerror = () => {
      console.log("error on loading image");
    };
  };
  console.log("image", image1);

  return (
    <div className={style.container}>
      <h1 style={{ marginTop: "3rem", marginBottom: "3rem" }}>User Profile</h1>
      <h3 style={{ marginLeft: "2.5rem", marginBottom: "1rem" }}>
        User Information
      </h3>
      <hr style={{ width: "fitcontent", marginBottom: "1rem" }} />

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, margin: "10px", width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Name"
              placeholder="Name"
            />
            <TextField
              required
              id="outlined-disabled"
              label="Email"
              placeholder="Email"
            />

            <label htmlFor="contained-button-file">
              <div className={style.formPhoto}>
                <p>User Photo</p>
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={(e) => handleImage(e)}
                />
                {preview ? <img src={preview} alt="preview" /> : null}
              </div>
              {/* <Button variant="contained" component="span">
                User Photo
              </Button> */}
            </label>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              id="outlined-disabled"
              label="Phone Number"
              type="number"
              placeholder="Phone Number"
            />
            <TextField
              required
              id="outlined-disabled"
              label="Gender"
              placeholder="Gender "
              helperText="Some important text"
            />
          </Box>
        </div>
        <div
          style={{
            marginTop: "4rem",
            marginLeft: "30rem",
            display: "flex",
            justifyContent: "right",
            height: "3rem",
          }}
        >
          <button
            style={{
              width: "20rem",
              backgroundColor: "#F67979",
              borderRadius: "2rem",
              color: "white",
              borderStyle: "none",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              width: "20rem",
              backgroundColor: "#10B278",
              borderRadius: "2rem",
              marginLeft: "1rem",
              color: "white",
              borderStyle: "none",
            }}
          >
            Save
          </button>
        </div>
      </Box>
    </div>
  );
}
