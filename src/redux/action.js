import { UPDATE_COMPANYNAME } from "./type";
import { UPDATE_INVOICENAME } from "./type";
import { UPDATE_CURRENCY } from "./type";
import { ADD_ITEMS } from "./type";
import { REMOVE_ITEMS } from "./type";
import { EDIT_ITEMS } from "./type";
import { SAVE_INVOICE } from "./type";
import { DELETE_INVOICE } from "./type";
import { SAVE_TO_CURRENT } from "./type";

export const updateCompanyName = (name) => ({
  type: UPDATE_COMPANYNAME,
  payload: name,
});
export const updateInvoiceName = (name) => ({
  type: UPDATE_INVOICENAME,
  payload: name,
});

export const updateCurrency = (name) => ({
  type: UPDATE_CURRENCY,
  payload: name,
});

export const addItems = (data) => ({
  type: ADD_ITEMS,
  payload: data,
});
export const removeItems = (id) => ({
  type: REMOVE_ITEMS,
  payload: {
    id,
  },
});
export const editItems = (data) => ({
  type: EDIT_ITEMS,
  payload: data,
});
export const saveInvoice = () => ({
  type: SAVE_INVOICE,
});
export const deleteInvoice = (id) => ({
  type: DELETE_INVOICE,
  payload: id,
});

export const saveToCurrent = (id) => ({
  type: SAVE_TO_CURRENT,
  payload: id,
});
