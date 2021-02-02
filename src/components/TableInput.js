import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { IoMdDoneAll } from "react-icons/io";
import { Button, Input } from "@material-ui/core";

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

const TableInput = () => {
  const [addRow, setAddRow] = useState([]);

  const handleInputChange = (e) => {
    // const value = [...addRow];
    // value = ;

    setAddRow({ ...addRow, [e.target.name]: e.target.value });
    console.log(addRow);
  };
  const handleClick = () => {
    setAddRow([
      ...addRow,
      { itemName: "", Quantity: "", price: "", Discount: "" },
    ]);
  };

  return (
    <div>
      <TableRow>
        <StyledTableCell component="th" scope="row">
          <div>
            <Input
              onChange={handleInputChange}
              name="itemName"
              placeholder="Item Name"
            ></Input>
          </div>
        </StyledTableCell>
        <StyledTableCell align="right">
          <div>
            <Input onChange={handleInputChange} placeholder="Quantity"></Input>{" "}
          </div>{" "}
        </StyledTableCell>
        <StyledTableCell align="right">
          <div>
            <Input
              onChange={handleInputChange}
              name="price"
              placeholder="Price"
            ></Input>{" "}
          </div>{" "}
        </StyledTableCell>
        <StyledTableCell align="right">
          <div>
            <Input
              onChange={handleInputChange}
              name="discount"
              placeholder="Discount"
            ></Input>{" "}
          </div>{" "}
        </StyledTableCell>
        <StyledTableCell align="right">
          <Button onClick={handleClick}>
            <IoMdDoneAll />
          </Button>
        </StyledTableCell>
      </TableRow>
    </div>
  );
};

export default TableInput;
