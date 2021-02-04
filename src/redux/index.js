import { DELETE_INVOICE, UPDATE_COMPANYNAME } from "./type";
import { UPDATE_INVOICENAME } from "./type";
import { UPDATE_CURRENCY } from "./type";
import { ADD_ITEMS } from "./type";
import { REMOVE_ITEMS } from "./type";
import { EDIT_ITEMS } from "./type";
import { SAVE_INVOICE, SAVE_TO_CURRENT } from "./type";

const defaultCurrentInvoice = {
  companyName: "",
  invoiceName: "",
  currency: "",
  items: [],
  totalAmount: 0,
  totalDiscount: 0,
  finalPayableAmount: 0,
};

const defaultState = {
  savedInvoice: [],
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
      const newItemsValue = [
        ...state.currentInvoice.items,
        { id: state.currentInvoice.items.length + 1, ...action.payload },
      ];
      const calculations = newItemsValue.reduce(
        (acc, curr) => {
          return {
            totalAmount: acc.totalAmount + curr.itemQnty * curr.itemPrice,
            discount: acc.discount + (curr.itemPrice * curr.itemDiscount) / 100,
          };
        },
        { totalAmount: 0, discount: 0 }
      );

      return {
        ...state,
        currentInvoice: {
          ...state.currentInvoice,
          items: newItemsValue,
          totalAmount: calculations.totalAmount,
          totalDiscount: calculations.discount,
          finalPayableAmount: calculations.totalAmount - calculations.discount,
        },
      };

    case REMOVE_ITEMS: {
      const deletedItems = state.currentInvoice.items.filter(
        (item) => item.id !== action.payload.id
      );
      const calculations = deletedItems.reduce(
        (acc, curr) => {
          return {
            totalAmount: acc.totalAmount + curr.itemQnty * curr.itemPrice,
            discount: acc.discount + (curr.itemPrice * curr.itemDiscount) / 100,
          };
        },
        { totalAmount: 0, discount: 0 }
      );
      return {
        ...state,
        currentInvoice: {
          ...state.currentInvoice,
          items: deletedItems,
          totalAmount: calculations.totalAmount,
          totalDiscount: calculations.discount,
          finalPayableAmount: calculations.totalAmount - calculations.discount,
        },
      };
    }

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

    case SAVE_INVOICE:
      return {
        ...state,
        savedInvoice: [
          ...state.savedInvoice,
          {
            id: state.savedInvoice.length + 1,
            ...state.currentInvoice,
          },
        ],
        currentInvoice: defaultCurrentInvoice,
      };

    case DELETE_INVOICE:
      return {
        ...state,
        savedInvoice: state.savedInvoice.filter(
          (obj) => obj.id !== action.payload
        ),
      };

    case SAVE_TO_CURRENT:
      const seletedItems = state.savedInvoice.filter(
        (item) => item.id === action.payload
      );

      console.log("selectedItems....", seletedItems[0]);
      return {
        ...state,
        currentInvoice: { ...state.currentInvoice, ...seletedItems[0] },
      };
    default:
      return state;
  }
};

export default invoiceReducer;
