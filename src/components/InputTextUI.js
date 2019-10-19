import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  input: {
    margin: theme.spacing(1)
  }
}));

export default function InputText(props) {
  const { inputWish, handleInputWish } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Input
        placeholder="Write here your wish..."
        value={inputWish}
        onChange={handleInputWish}
        className={classes.input}
        inputProps={{
          "aria-label": "description"
        }}
      />
    </div>
  );
}
