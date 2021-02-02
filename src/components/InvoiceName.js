import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AiTwotoneEdit } from "react-icons/ai";
import Button from "@material-ui/core/Button";
import InvoiceInput from "./InvoiceInput";
import { connect } from "react-redux";
import { updateInvoiceName } from "../redux/action";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const InvoiceLabel = ({ invoiceName, handleAddInvoice }) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <label>
          {invoiceName && invoiceName !== "" ? invoiceName : "Invoice Name"}
        </label>
      </div>
      <div>
        <Button
          variant="contained"
          className={classes.root}
          onClick={handleAddInvoice}
        >
          <AiTwotoneEdit />
        </Button>
      </div>
    </div>
  );
};

const InvoiceName = ({ updateInvoiceName }) => {
  const [invoiceName, setInvoiceName] = useState("");
  const [showLable, setShowLable] = useState(false);

  const handleInvoiceName = (editData) => {
    toggleEdit();
    setInvoiceName(editData);
    updateInvoiceName(editData);
  };

  const toggleEdit = () => {
    setShowLable(!showLable);
  };

  return (
    <div>
      <div>
        <div className="outer-div">
          <div>
            {!showLable ? (
              <InvoiceLabel
                invoiceName={invoiceName}
                handleAddInvoice={toggleEdit}
              />
            ) : (
              <InvoiceInput onClickHandle={handleInvoiceName} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateInvoiceName: (val) => dispatch(updateInvoiceName(val)),
  };
};

export default connect(null, mapDispatchToProps)(InvoiceName);
