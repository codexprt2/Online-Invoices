import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { AiTwotoneEdit } from "react-icons/ai";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { FaRegSave } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const EditText = () => {
  const classes = useStyles();
  const [name, setName] = useState("Anjaliba");
  const [input, setInput] = useState("");
  const [screen, setScreen] = useState("show");

  const show = screen === "show";
  const handleSave = () => {
    setName({ name: input, mode: show });
  };
  const handleEdit = () => {
    setScreen({ mode: show });
  };

  return (
    <div>
      <div className="outer-div">
        <div>
          {show ? (
            <label>{name}</label>
          ) : (
            <Input onChange={(e) => setInput(e.target.value)} />
          )}
          <Button
            variant="contained"
            className={classes.root}
            onClick={show ? handleEdit : handleSave}
          >
            {show ? <AiTwotoneEdit /> : <FaRegSave />}
          </Button>
        </div>
        <div>
          <TextField id="filled-basic" label="Invoice Name" variant="filled" />

          <Button variant="contained" className={classes.root}>
            <AiTwotoneEdit />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditText;
