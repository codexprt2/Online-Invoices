import { UPDATE_COMPANYNAME } from "./type";
import { UPDATE_INVOICENAME } from "./type";
import { UPDATE_CURRENCY } from "./type";
import { ADD_ITEMS } from "./type";
import { REMOVE_ITEMS } from "./type";
import { EDIT_ITEMS } from "./type";

const defaultState = {
  savedInvoice: [
    {
      id: "",
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
  ],
  currentInvoice: {
    companyName: "",
    invoiceName: "",
    currency: "",
    items: [],
    totalAmount: "",
    totalDiscount: "",
    finalPayableAmount: "",
  },
};

const invoiceReducer = (state = defaultState, action) => {
  // console.log(state);
  // console.log(action);
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

    case ADD_ITEMS:
      return {
        ...state,
        currentInvoice: {
          ...state.currentInvoice,
          items: [
            ...state.currentInvoice.items,
            { id: state.currentInvoice.items.length + 1, ...action.payload },
          ],
          totalAmount: "",
          totalDiscount: "",
        },
      };

    case REMOVE_ITEMS:
      console.log("action", action.payload);
      return {
        ...state,
        currentInvoice: {
          ...state.currentInvoice,
          items: state.currentInvoice.items.filter(
            (item) => item.id !== action.payload.id
          ),
        },
      };

    case EDIT_ITEMS:
      const EditItem = state.currentInvoice.items;
      EditItem[action.payload.id] = action.payload;

      return {
        ...state,
        currentInvoice: {
          ...state.currentInvoice,
          items: [...EditItem],
        },
      };

    default:
      return state;
  }
};

export default invoiceReducer;
