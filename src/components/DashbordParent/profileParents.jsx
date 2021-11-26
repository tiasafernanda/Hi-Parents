import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

export default function ProfileParents() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Parent Name"
          defaultValue="Vegeta Super"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <TextField
          input="file"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
    </Box>
  );
}
