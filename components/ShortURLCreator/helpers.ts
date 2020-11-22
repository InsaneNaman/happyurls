import normalizeUrl from "normalize-url";

//utils
import { generateErrorToast, generateSuccessToast } from "utils/Toast";
import { createShortURL } from "utils/shortURL";

//pullstate
import { updateStateValue } from "state/pullState/helpers";

export const validateAndCreateShortURL = (
  lastLongURL: string,
  newlongURL: string
) => {
  if (!newlongURL.length) {
    generateErrorToast("Sorry, I can shorten only valid URLs. 😅");
    return;
  }
  updateStateValue({ key: "isURLLoading", value: true });

  //normalize url
  const normalizedLongURL = normalizeUrl(newlongURL);

  //check if user has entered the same url again or not
  if (lastLongURL !== normalizedLongURL) {
    //if not then create a new one
    createShortURL(normalizedLongURL)
      .then((shortURLData) => {
        updateStateValue({ key: "urlData", value: shortURLData });
        onSuccessfulShortURLCreation(normalizedLongURL);
      })
      .catch(() =>
        generateErrorToast(
          "I apologies but I had an Error 😔. Please report my devs."
        )
      );
  } else {
    //if yes then show the old shortURL
    onSuccessfulShortURLCreation(normalizedLongURL);
  }
};

const onSuccessfulShortURLCreation = (longURL) => {
  //updating global state after each new shortURL operation
  updateStateValue([
    { key: "hasShortURL", value: true },
    { key: "isURLLoading", value: false },
    { key: "launchShortURLPreviewModal", value: true },
    { key: "longURL", value: longURL },
  ]);
  generateSuccessToast("Successfully Created Happy Short URL ✌️");
};
