import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AiTwotoneEdit } from "react-icons/ai";
import Button from "@material-ui/core/Button";
import CompanyInput from "./CompanyInput";
import { connect } from "react-redux";
import { updateCompanyName } from "../redux/action";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const CompanyLabel = ({ companyName, handleAddCompany }) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <label>
          {companyName && companyName !== "" ? companyName : "Company Name"}
        </label>
      </div>
      <div>
        <Button
          variant="contained"
          className={classes.root}
          onClick={handleAddCompany}
        >
          <AiTwotoneEdit />
        </Button>
      </div>
    </div>
  );
};

const CompanyName = ({ updateCompanyName }) => {
  const classes = useStyles();
  const [companyName, setCompanyName] = useState("");
  const [showLable, setShowLable] = useState(false);

  const handleCompanyName = (editData) => {
    toggleEdit();
    setCompanyName(editData);
    console.log("update", updateCompanyName(editData));
  };
  const toggleEdit = () => {
    setShowLable(!showLable);
  };

  return (
    <div>
      <div className="outer-div">
        <div>
          {!showLable ? (
            <CompanyLabel
              companyName={companyName}
              handleAddCompany={toggleEdit}
            />
          ) : (
            <CompanyInput onClickHandle={handleCompanyName} />
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCompanyName: (val) => dispatch(updateCompanyName(val)),
  };
};

export default connect(null, mapDispatchToProps)(CompanyName);
