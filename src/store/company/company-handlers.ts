import { call, put } from "redux-saga/effects";
import { message } from "antd";
import {
  companyUpdateCompanyByIdRedux,
  companyUpdateCompanyRedux,
  companyUpdateFollowedCompanyPaginationRedux,
  companyUpdateFollowedCompanyRedux,
  companyUpdateListLogoRedux,
  companyUpdateLoadingRedux,
  companyUpdatePaginationRedux,
  companyUpdateRelativeCompanyPaginationRedux,
  companyUpdateRelativeCompanyRedux,
} from "./company-slice";
import {
  requestCompanyGetCompany,
  requestCompanyGetCompanyById,
  requestCompanyGetFollowedCompany,
  requestCompanyGetListLogo,
  requestCompanyGetRelativeCompany,
} from "./company-requests";
import { getToken, Token } from "../../utils/auth";

function* handleCompanyGetCompany(dataGetCompany: any): Generator<any> {
  try {
    yield put(companyUpdateLoadingRedux({ loadingCompany: true }));
    const response: any = yield call(
      requestCompanyGetCompany,
      dataGetCompany?.payload?.candidate_id,
      dataGetCompany?.payload?.companyName,
      dataGetCompany?.payload?.size,
      dataGetCompany?.payload?.page
    );
    if (response?.data?.code === 1000) {
      yield put(
        companyUpdateCompanyRedux({ companys: response?.data?.result?.content })
      );
      yield put(
        companyUpdatePaginationRedux({
          paginationCompany: {
            pageNumber: response?.data?.result?.pageNumber,
            pageSize: response?.data?.result?.pageSize,
            totalElements: response?.data?.result?.totalElements,
            totalPages: response?.data?.result?.totalPages,
            numberOfElements: response?.data?.result?.numberOfElements,
          },
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(companyUpdateLoadingRedux({ loadingCompany: false }));
  }
}
function* handleCompanyGetRelativeCompany(dataGetCompany: any): Generator<any> {
  try {
    yield put(companyUpdateLoadingRedux({ loadingCompany: true }));
    const response: any = yield call(
      requestCompanyGetRelativeCompany,
      dataGetCompany?.payload?.candidate_id,
      dataGetCompany?.payload?.companyName,
      dataGetCompany?.payload?.size,
      dataGetCompany?.payload?.page
    );
    if (response?.data?.code === 1000) {
      yield put(
        companyUpdateRelativeCompanyRedux({
          relativeCompanys: response?.data?.result?.content,
        })
      );
      yield put(
        companyUpdateRelativeCompanyPaginationRedux({
          paginationRelativeCompany: {
            pageNumber: response?.data?.result?.pageNumber,
            pageSize: response?.data?.result?.pageSize,
            totalElements: response?.data?.result?.totalElements,
            totalPages: response?.data?.result?.totalPages,
            numberOfElements: response?.data?.result?.numberOfElements,
          },
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(companyUpdateLoadingRedux({ loadingCompany: false }));
  }
}
function* handleCompanyGetFollowedCompany(dataGetCompany: any): Generator<any> {
  try {
    yield put(companyUpdateLoadingRedux({ loadingCompany: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCompanyGetFollowedCompany,
      dataGetCompany?.payload?.candidate_id,
      dataGetCompany?.payload?.size,
      dataGetCompany?.payload?.page,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        companyUpdateFollowedCompanyRedux({
          followedCompanys: response?.data?.result?.content,
        })
      );
      yield put(
        companyUpdateFollowedCompanyPaginationRedux({
          paginationFollowedCompany: {
            pageNumber: response?.data?.result?.pageNumber,
            pageSize: response?.data?.result?.pageSize,
            totalElements: response?.data?.result?.totalElements,
            totalPages: response?.data?.result?.totalPages,
            numberOfElements: response?.data?.result?.numberOfElements,
          },
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(companyUpdateLoadingRedux({ loadingCompany: false }));
  }
}
function* handleCompanyGetCompanyById(dataGetById: any): Generator<any> {
  try {
    yield put(companyUpdateLoadingRedux({ loadingCompany: true }));
    const response: any = yield call(
      requestCompanyGetCompanyById,
      dataGetById?.payload?.company_id,
      dataGetById?.payload?.candidate_id
    );
    if (response?.data?.code === 1000) {
      yield put(
        companyUpdateCompanyByIdRedux({ companyById: response.data.result })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(companyUpdateLoadingRedux({ loadingCompany: false }));
  }
}
function* handleCompanyGetListLogo(): Generator<any> {
  try {
    yield put(companyUpdateLoadingRedux({ loadingCompany: true }));
    const response: any = yield call(requestCompanyGetListLogo);
    console.log("🚀 ~ function*handleCompanyGetListLogo ~ response:", response);
    if (response?.data?.code === 1000) {
      yield put(companyUpdateListLogoRedux({ listLogo: response.data.result }));
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(companyUpdateLoadingRedux({ loadingCompany: false }));
  }
}

export {
  handleCompanyGetCompany,
  handleCompanyGetCompanyById,
  handleCompanyGetRelativeCompany,
  handleCompanyGetFollowedCompany,
  handleCompanyGetListLogo,
};
