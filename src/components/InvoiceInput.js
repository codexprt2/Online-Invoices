import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { FaRegSave } from "react-icons/fa";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const InvoiceInput = ({ onClickHandle }) => {
  const classes = useStyles();
  const [name, setName] = useState(undefined);
  const onClickAdd = () => {
    onClickHandle(name);
  };
  return (
    <div>
      <div>
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </div>
      <div>
        <Button
          variant="contained"
          className={classes.root}
          onClick={onClickAdd}
        >
          <FaRegSave />
        </Button>
      </div>
    </div>
  );
};

export default InvoiceInput;
