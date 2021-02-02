import { UPDATE_COMPANYNAME } from "./type";
import { UPDATE_INVOICENAME } from "./type";
import { UPDATE_CURRENCY } from "./type";

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
