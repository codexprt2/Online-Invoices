import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { AiTwotoneEdit } from "react-icons/ai";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { updateCurrency } from "../redux/action";

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

const DropDownBox = ({ updateCurrency }) => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
    updateCurrency(event.target.value);
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
              value={currency}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"USD"}>USD($)</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"EURO"}>EURO</MenuItem>
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrency: (val) => dispatch(updateCurrency(val)),
  };
};

export default connect(null, mapDispatchToProps)(DropDownBox);
