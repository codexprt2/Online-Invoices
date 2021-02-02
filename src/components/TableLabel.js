import React from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Button, label } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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
const TableLabel = () => {
  return (
    <div>
      <TableRow>
        <StyledTableCell component="th" scope="row">
          <div>
            <label></label>
          </div>
        </StyledTableCell>
        <StyledTableCell align="right">
          <div>
            <label></label>
          </div>{" "}
        </StyledTableCell>
        <StyledTableCell align="right">
          <div>
            <label></label>
          </div>{" "}
        </StyledTableCell>
        <StyledTableCell align="right">
          <div>
            <label></label>
          </div>{" "}
        </StyledTableCell>
        <StyledTableCell align="right">
          <Button onClick={handleClick}>
            <AiTwotoneEdit />
          </Button>
          <Button>
            <RiDeleteBin5Line />
          </Button>
        </StyledTableCell>
      </TableRow>
    </div>
  );
};

export default TableLabel;
