import React from "react";
import TableComponentDetailPage from "../../components/TableComponentDetailPage";
import EditText from "../../components/EditText";
import DropDownBox from "../../components/DropDownBox";
import SaveBtn from "../../components/SaveBtn";

const detailPage = () => {
  return (
    <div>
      <SaveBtn />
      <EditText />
      <DropDownBox />
      <TableComponentDetailPage />
    </div>
  );
};

export default detailPage;
