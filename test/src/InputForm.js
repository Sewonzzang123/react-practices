import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function InputForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* <div>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField id="standard-required" label="Id" type="search" />
      </div> */}

      <TextField
        id="outlined-size-small"
        label="Id"
        type="search"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      <Button variant="outlined" color="primary">
        Login
      </Button>
    </form>
  );
}
