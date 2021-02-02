import { UPDATE_COMPANYNAME } from "./type";
import { UPDATE_INVOICENAME } from "./type";
import { UPDATE_CURRENCY } from "./type";

const defaultState = {
  savedInvoice: [
    {
      id: "0",
      companyName: "qwe",
      invoiceName: "wsx",
      currency: "fgh",
      items: [
        {
          itemName: "jsfksj",
          itemQnty: "djh",
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
};

const invoiceReducer = (state = defaultState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case UPDATE_COMPANYNAME:
      return {
        ...state,
        currentInvoice: {
          ...state.currentInvoice,
          companyName: action.payload,
        },
      };

    case UPDATE_INVOICENAME:
      return {
        ...state,
        currentInvoice: {
          ...state.currentInvoice,
          invoiceName: action.payload,
        },
      };

    case UPDATE_CURRENCY:
      return {
        ...state,
        currentInvoice: {
          ...state.currentInvoice,
          currency: action.payload,
        },
      };
    default:
      return state;
  }
};

export default invoiceReducer;
