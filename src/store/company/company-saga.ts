import { takeLatest } from "redux-saga/effects";
import {
  companyGetCompany,
  companyGetCompanyById,
  companyGetFollowedCompany,
  companyGetListLogo,
  companyGetRelativeCompany,
} from "./company-slice";
import {
  handleCompanyGetCompany,
  handleCompanyGetCompanyById,
  handleCompanyGetFollowedCompany,
  handleCompanyGetListLogo,
  handleCompanyGetRelativeCompany,
} from "./company-handlers";

export default function* adminSaga() {
  yield takeLatest(companyGetCompany.type, handleCompanyGetCompany);
  yield takeLatest(
    companyGetRelativeCompany.type,
    handleCompanyGetRelativeCompany
  );
  yield takeLatest(
    companyGetFollowedCompany.type,
    handleCompanyGetFollowedCompany
  );
  yield takeLatest(companyGetCompanyById.type, handleCompanyGetCompanyById);
  yield takeLatest(companyGetListLogo.type, handleCompanyGetListLogo);
}
