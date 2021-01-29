const defaultState = {
  Invoices: {
    savedInvoice: [
      {
        id: "0",
        companyName: "qwe",
        invoiceName: "wsx",
        currency: "fgh",
        items: [
          {
            itemName: "",
            itemQnty: "",
            itemPrice: "",
            itemDiscount: "",
          },
        ],
        totalAmount: "",
        totalDiscount: "",
        finalPayableAmount: "",
      },
    ],
    currentInvoice: {
      companyName: "",
      invoiceName: "",
      currency: "",
      items: [
        {
          itemName: "",
          itemQnty: "",
          itemPrice: "",
          itemDiscount: "",
        },
      ],
      totalAmount: "",
      totalDiscount: "",
      finalPayableAmount: "",
    },
  },
};

const invoiceReducer = (state = defaultState, action) => {
  // console.log(action.payload.id);
  switch (action.type) {
    default:
      return state;
  }
};

export default invoiceReducer;
