export type UpdateStateType = {
  key: string;
  value: any;
};
export type ServerResponseType = {
  type: string;
  msg: string;
  data: any;
};

export type StatusType = {
  ERROR: string;
  SUCCESS: string;
};

export interface ISTATE {
  urlData: object;
  hasShortURL: boolean;
  shortURL: string;
  longURL: string;
  isValidlongURL: boolean;
  isURLLoading: boolean;
  launchShortURLPreviewModal: boolean;
}
