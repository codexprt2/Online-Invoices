import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { IoMdDoneAll } from "react-icons/io";
import { Button, Input } from "@material-ui/core";
import { connect } from "react-redux";
import { addItems } from "../redux/action";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TableInput = ({ addItems, onEditHandle }) => {
  const [item, setItem] = useState([]);

  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    addItems(item);
    onEditHandle(item);
  };

  return (
    <React.Fragment>
      <StyledTableRow>
        <StyledTableCell component="th" scope="row">
          <Input name="itemName" onChange={handleInputChange}></Input>
        </StyledTableCell>
        <StyledTableCell align="left">
          <Input name="itemQnty" onChange={handleInputChange}></Input>
        </StyledTableCell>
        <StyledTableCell align="left">
          <Input name="itemPrice" onChange={handleInputChange}></Input>
        </StyledTableCell>
        <StyledTableCell align="left">
          <Input name="itemDiscount" onChange={handleInputChange}></Input>
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button onClick={handleClick}>
            <IoMdDoneAll />
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItems: (data) => dispatch(addItems(data)),
  };
};

export default connect(null, mapDispatchToProps)(TableInput);
