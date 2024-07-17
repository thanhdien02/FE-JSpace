import { createSlice } from "@reduxjs/toolkit";

interface ICommon {
  infoUserOauth: any;
  jobStatusCheck?: boolean;
  loginCheck?: boolean;
  inputHeaderSearchCheck?: boolean;
  inputBannerSearchCheck?: boolean;
  suggestJobCheck?: boolean;
  locations?: any;
  jobTypes?: any;
  genders?: any;
  ranks?: any;
  applyStatus?: any;
  experiences?: any;
  skills?: any;
  loadingCommon?: boolean;
  messageCommon?: string;
}

const init: ICommon = {
  infoUserOauth: {},
  jobStatusCheck: false,
  loginCheck: false,
  inputHeaderSearchCheck: false,
  inputBannerSearchCheck: false,
  suggestJobCheck: false,
  locations: {},
  jobTypes: {},
  genders: {},
  ranks: {},
  applyStatus: {},
  experiences: {},
  skills: {},
  loadingCommon: false,
  messageCommon: "",
};
const commonSlice: any = createSlice({
  name: "common",
  initialState: init,
  reducers: {
    commonUpdateOAuthRedux: (state: any, action: any) => ({
      ...state,
      infoUserOauth: action.payload.infoUserOauth,
    }),
    commonUpdateJobStatusDetailCheckRedux: (state: any, action: any) => ({
      ...state,
      jobStatusCheck: action.payload.jobStatusCheck,
    }),
    commonUpdateLoginRedux: (state: any, action: any) => ({
      ...state,
      loginCheck: action.payload.loginCheck,
    }),
    commonUpdateSuggestJobRedux: (state: any, action: any) => ({
      ...state,
      suggestJobCheck: action.payload.suggestJobCheck,
    }),
    commonUpdateInputHeaderSearchCheckRedux: (state: any, action: any) => ({
      ...state,
      inputHeaderSearchCheck: action.payload.inputHeaderSearchCheck,
    }),
    commonUpdateInputBannerSearchCheckRedux: (state: any, action: any) => ({
      ...state,
      inputBannerSearchCheck: action.payload.inputBannerSearchCheck,
    }),
    commonUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingCommon: action.payload.loadingCommon,
    }),
    commonUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageCommon: action.payload.messageCommon,
    }),
    commonUpdateLocationRedux: (state: any, action: any) => ({
      ...state,
      locations: action.payload.locations,
    }),
    commonUpdateJobTypeRedux: (state: any, action: any) => ({
      ...state,
      jobTypes: action.payload.jobTypes,
    }),
    commonUpdateGenderRedux: (state: any, action: any) => ({
      ...state,
      genders: action.payload.genders,
    }),
    commonUpdateRankRedux: (state: any, action: any) => ({
      ...state,
      ranks: action.payload.ranks,
    }),
    commonUpdateApplyStatusRedux: (state: any, action: any) => ({
      ...state,
      applyStatus: action.payload.applyStatus,
    }),
    commonUpdateExperienceRedux: (state: any, action: any) => ({
      ...state,
      experiences: action.payload.experiences,
    }),
    commonUpdateSkillsRedux: (state: any, action: any) => ({
      ...state,
      skills: action.payload.skills,
    }),
    commonGetLocation: () => {},
    commonGetJobType: () => {},
    commonGetGender: () => {},
    commonGetRank: () => {},
    commonGetApplyStatus: () => {},
    commonGetExperience: () => {},
    commonGetSkills: () => {},
  },
});
export const {
  commonUpdateLoginRedux,
  commonUpdateOAuthRedux,
  commonUpdateLoadingRedux,
  commonUpdateMessageRedux,
  commonUpdateLocationRedux,
  commonUpdateJobTypeRedux,
  commonUpdateGenderRedux,
  commonUpdateRankRedux,
  commonUpdateApplyStatusRedux,
  commonUpdateExperienceRedux,
  commonGetLocation,
  commonGetJobType,
  commonGetGender,
  commonGetRank,
  commonGetApplyStatus,
  commonGetExperience,
  commonGetSkills,
  commonUpdateSkillsRedux,
  commonUpdateSuggestJobRedux,
  commonUpdateInputHeaderSearchCheckRedux,
  commonUpdateInputBannerSearchCheckRedux,
  commonUpdateJobStatusDetailCheckRedux,
} = commonSlice.actions;
export default commonSlice.reducer;
