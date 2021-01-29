import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { AiTwotoneEdit } from "react-icons/ai";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1.5),
    },
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    //marginTop: theme.spacing(2),
  },
}));

const DropDownBox = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className="dropdownbox">
        <div>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              Currency
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>USD($)</MenuItem>
              <MenuItem value={20}>INR</MenuItem>
              <MenuItem value={30}>EURO</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="dropdown_btn">
          <Button variant="contained" className={classes.root}>
            <AiTwotoneEdit />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DropDownBox;
