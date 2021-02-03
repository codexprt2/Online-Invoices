import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { Button, Input } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AiOutlineEdit, AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { connect } from "react-redux";
import { removeItems } from "../redux/action";

import TableInput from "./TableInput";

// import React, { useState, useEffect } from "react";

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

const TableLabel = ({ currentInvoice, remove }) => {
  return (
    <React.Fragment>
      {currentInvoice.map((row, index) => (
        <StyledTableRow key={`${index}`}>
          <StyledTableCell component="th" scope="row">
            {row.itemName}
          </StyledTableCell>
          <StyledTableCell align="left">{row.itemQnty}</StyledTableCell>
          <StyledTableCell align="left">{row.itemPrice}</StyledTableCell>
          <StyledTableCell align="left">{row.itemDiscount}</StyledTableCell>
          <StyledTableCell align="left">
            <button>
              <AiTwotoneEdit />
            </button>
            <button onClick={() => remove(row.id)}>
              <RiDeleteBin5Line />
            </button>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </React.Fragment>
  );
};
const TableComponentDetailPage = ({ currentInvoice, remove }) => {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleEdit = () => {
    setItems([...currentInvoice]);
    setIsEdit(!isEdit);
  };
  const handleInputRow = () => {
    setIsOpen(true);
    setIsEdit(true);
  };
  const onEditHandle = () => {
    setIsOpen(false);
    setIsEdit(false);
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Item Name</StyledTableCell>
              <StyledTableCell align="left">Item Qnty</StyledTableCell>
              <StyledTableCell align="left">Item Price</StyledTableCell>
              <StyledTableCell align="left">Item Discount(%) </StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableLabel currentInvoice={currentInvoice} remove={remove} />

            {isEdit ? <TableInput onEditHandle={onEditHandle} /> : null}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="create-button">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleInputRow}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (store) => {
  const { currentInvoice } = store;

  return {
    currentInvoice: currentInvoice.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removeItems(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableComponentDetailPage);
