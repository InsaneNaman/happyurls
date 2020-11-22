import { Store } from "pullstate";

//interface
import { ISTATE } from "@types";

export const STATE = new Store<ISTATE>({
  urlData: {},
  hasShortURL: false,
  shortURL: "",
  longURL: "",
  isValidlongURL: true,
  isURLLoading: false,
  launchShortURLPreviewModal: false,
});
