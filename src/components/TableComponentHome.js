import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
import { deleteInvoice, saveToCurrent } from "../redux/action";
import { Link } from "react-router-dom";

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

const TableComponentHome = ({ savedInvoice, deleteInvoice, saveToCurrent }) => {
  // console.log("savedInvoice......", savedInvoice);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Company Name</StyledTableCell>
            <StyledTableCell align="right">Invoice Name</StyledTableCell>
            <StyledTableCell align="right">Currency</StyledTableCell>
            <StyledTableCell align="right">Action </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {savedInvoice.map((row, id) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.companyName}</StyledTableCell>
              <StyledTableCell align="right">{row.invoiceName}</StyledTableCell>
              <StyledTableCell align="right">{row.currency}</StyledTableCell>
              <StyledTableCell align="right">
                <Link to={`/detailpage/${id}`}>
                  <button onClick={() => saveToCurrent(row.id)}>
                    <AiTwotoneEdit />
                  </button>
                </Link>
                <button onClick={() => deleteInvoice(row.id)}>
                  <RiDeleteBin5Line />
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (store) => {
  const { savedInvoice } = store;

  return {
    savedInvoice: savedInvoice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteInvoice: (id) => dispatch(deleteInvoice(id)),
    saveToCurrent: (data) => dispatch(saveToCurrent(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableComponentHome);
