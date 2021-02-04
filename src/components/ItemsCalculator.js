import React, { useState } from "react";
import { connect } from "react-redux";

const ItemsCalculator = ({
  currentInvoiceItem,
  totalAmount,
  totalDiscount,
  finalPayableAmount,
}) => {
  return (
    <div>
      <div>Total Items:{currentInvoiceItem.length}</div>
      <div>Total Amount:{totalAmount}</div>
      <div>Total Discount:{totalDiscount} </div>
      <div>Final Payable Amount:{finalPayableAmount}</div>
    </div>
  );
};

const mapStateToProps = (store) => {
  const { currentInvoice } = store;

  return {
    currentInvoiceItem: currentInvoice.items,
    totalAmount: currentInvoice.totalAmount,
    totalDiscount: currentInvoice.totalDiscount,
    finalPayableAmount: currentInvoice.finalPayableAmount,
  };
};

export default connect(mapStateToProps, null)(ItemsCalculator);
