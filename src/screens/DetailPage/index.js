import React from "react";
import TableComponentDetailPage from "../../components/TableComponentDetailPage";
import CompanyName from "../../components/CompanyName";
import DropDownBox from "../../components/DropDownBox";
import SaveBtn from "../../components/SaveBtn";
import { connect } from "react-redux";
import InvoiceName from "../../components/InvoiceName";
import ItemsCalculator from "../../components/ItemsCalculator";

const detailPage = () => {
  return (
    <div>
      <SaveBtn />
      <CompanyName />
      <InvoiceName />
      <DropDownBox />
      <TableComponentDetailPage />
      <ItemsCalculator />
    </div>
  );
};
const mapStateToProps = (store) => {
  console.log(store);
  const { currentInvoice } = store;

  return {
    currentInvoice: currentInvoice,
  };
};

export default connect(mapStateToProps)(detailPage);
