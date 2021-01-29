import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TableComponentHome from "../../components/TableComponentHome";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

const home = () => {
  //   const classes = useStyles();

  return (
    <div>
      <div className="create-button">
        <Link to={"/detailpage"}>
          <Button
            variant="contained"
            color="primary"
            className="link-font-color"
          >
            Create New
          </Button>
        </Link>
      </div>

      <div>
        <TableComponentHome />
      </div>
    </div>
  );
};

export default home;
