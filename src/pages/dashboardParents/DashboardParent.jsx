import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

export default function ProfileParent() {
  return (
    <>
      <h1>User Profile</h1>
      <h3 style={{ color: "red" }}>Parent Information</h3>
      <hr />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "50ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: "flex" }}>
          <Box sx={{ width: "50%", display: "flex", flexDirection: "column"}}>
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
        <h3>Children Information 1</h3>
        <hr />
        <div style={{ display: "flex" }}>
          <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}>
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
      </Box>
    </>
  );
}
