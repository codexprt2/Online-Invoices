import React, { useState } from "react";
import { connect } from "react-redux";

const ItemsCalculator = ({ currentInvoiceItem }) => {
  const calculations = currentInvoiceItem.reduce(
    (acc, curr) => {
      return {
        totalAmount: acc.totalAmount + curr.itemQnty * curr.itemPrice,
        discount: acc.discount + (curr.itemPrice * curr.itemDiscount) / 100,
      };
    },
    { totalAmount: 0, discount: 0 }
  );

  console.log("calculations : ", calculations);

  return (
    <div>
      <div>Total Items:{currentInvoiceItem.length}</div>
      <div>Total Amount:{calculations.totalAmount}</div>
      <div>Total Discount: {calculations.discount}</div>
      <div>
        Final Payable Amount: {calculations.totalAmount - calculations.discount}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  const { currentInvoice } = store;

  return {
    currentInvoiceItem: currentInvoice.items,
  };
};

export default connect(mapStateToProps, null)(ItemsCalculator);
