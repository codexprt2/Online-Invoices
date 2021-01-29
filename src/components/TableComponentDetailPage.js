import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Button, Input } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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

const TableComponentHome = () => {
  const classes = useStyles();
  const [addRow, setAddRow] = useState([]);

  const handleInputChange = (index, e) => {
    const value = [...addRow];
    value[index][e.target.value] = e.target.value;
    setAddRow(value);
  };

  const addNewRow = () => {
    setAddRow([
      ...addRow,
      { itemName: "", Quantity: "", price: "", Discount: "" },
    ]);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Item</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Discount</StyledTableCell>
              {/*<StyledTableCell align="right">Action</StyledTableCell>*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {addRow.map((row, index) => (
              <StyledTableRow key={`${index}`}>
                <StyledTableCell component="th" scope="row">
                  <div>
                    <Input
                      onChange={(e) => handleInputChange(index, e)}
                    ></Input>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div>
                    <Input
                      onChange={(e) => handleInputChange(index, e)}
                    ></Input>{" "}
                  </div>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div>
                    <Input
                      onChange={(e) => handleInputChange(index, e)}
                    ></Input>{" "}
                  </div>{" "}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div>
                    <Input
                      onChange={(e) => handleInputChange(index, e)}
                    ></Input>{" "}
                  </div>{" "}
                </StyledTableCell>
                {/*<StyledTableCell align="right">
                  <button>
                    <AiTwotoneEdit />
                  </button>
                  <button>
                    <RiDeleteBin5Line />
                  </button>
            </StyledTableCell>*/}
              </StyledTableRow>
            ))}
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
          onClick={addNewRow}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};

export default TableComponentHome;
