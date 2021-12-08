import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function ProfileParent() {
  return (
    <>
      <h1 style={{ marginTop: "3rem", marginBottom: "3rem" }}>User Profile</h1>
      <h3 style={{ marginLeft: "2.5rem", marginBottom: "1rem" }}>
        Parent Information
      </h3>
      <hr style={{ width: "fitcontent" }} />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              sx={{ width: "100%" }}
              required
              id="outlined-required"
              label="Parent Name"
              placeholder="Parent Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              placeholder="Email"
            />
            <TextField
              required
              id="outlined-required"
              label="Phone Number"
              type="number"
              placeholder="Phone Number"
            />
            <TextField
              required
              id="outlined-required"
              label="Address"
              type="text"
              placeholder="Address"
            />
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button variant="contained" component="span">
                Change Photo
              </Button>
            </label>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              id="outlined-required"
              label="Job"
              placeholder="Job"
            />
            <TextField
              required
              id="outlined-required"
              label="Place Birth"
              placeholder="Place Birth"
            />
            <TextField
              required
              id="outlined-required"
              label="Date Birth"
              placeholder="Date Birth"
            />
            <TextField
              required
              id="outlined-required"
              label="Gender"
              type="text"
              placeholder="Gender"
            />
          </Box>
        </div>
        <h3
          style={{
            marginLeft: "2.5rem",
            marginTop: "4rem",
            marginBottom: "1rem",
          }}
        >
          Children Information 1
        </h3>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              id="outlined-required"
              label="Children Name"
              placeholder="Children Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Gender"
              placeholder="Gender"
            />
            <div>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span">
                  Change Photo
                </Button>
              </label>
            </div>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              id="outlined-required"
              label="Place Birth"
              placeholder="Place Birth"
            />
            <TextField
              required
              id="outlined-required"
              label="Date Birth"
              placeholder="Date Birth"
            />
          </Box>
        </div>
        <button
          style={{
            marginTop: "2rem",
            width: "10rem",
            height: " 2.5rem",
            borderRadius: "2rem",
            color: "green",
            border: "1px solid #10B278",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddCircleOutlineIcon
            sx={{ fontSize: "1rem", marginRight: "0.5rem" }}
          />
          Add Children
        </button>
        <div
          style={{
            marginTop: "4rem",
            // marginLeft: "30rem",
            display: "flex",
            justifyContent: "right",
            height: "3rem",
          }}
        >
          <button
            style={{
              width: "10rem",
              backgroundColor: "blue",
              borderRadius: "2rem",
              color: "white",
              borderStyle: "none",
            }}
          >
            Submit
          </button>
          <button
            style={{
              width: "10rem",
              backgroundColor: "#F67979",
              borderRadius: "2rem",
              marginLeft: "30rem",
              color: "white",
              borderStyle: "none",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              width: "10rem",
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
    </>
  );
}
