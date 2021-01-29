import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const SaveBtn = () => {
  const classes = useStyles();

  return (
    <div>
      <Link to={"/"}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Link>
    </div>
  );
};

export default SaveBtn;
