import { takeLatest } from "redux-saga/effects";
import { companyGetCompany, companyGetCompanyById } from "./company-slice";
import {
  handleCompanyGetCompany,
  handleCompanyGetCompanyById,
} from "./company-handlers";

export default function* adminSaga() {
  yield takeLatest(companyGetCompany.type, handleCompanyGetCompany);
  yield takeLatest(companyGetCompanyById.type, handleCompanyGetCompanyById);
}
