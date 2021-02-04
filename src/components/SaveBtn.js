import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";
import { saveInvoice } from "../redux/action";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const SaveBtn = ({ saveInvoice }) => {
  const classes = useStyles();
  // const [invoice, setInvoice] = useState([]);

  const onClickHandle = () => {
    saveInvoice();
  };

  return (
    <div>
      <Link to={"/"}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={onClickHandle}
        >
          Save
        </Button>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveInvoice: () => dispatch(saveInvoice()),
  };
};

export default connect(null, mapDispatchToProps)(SaveBtn);
