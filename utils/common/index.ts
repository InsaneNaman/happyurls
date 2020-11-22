import { customAlphabet } from "nanoid";
import { generateErrorToast, generateSuccessToast } from "utils/Toast";

//generates short id like 46Juzwwx
export const generateShortID = (): string => {
  const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    6
  );
  return nanoid();
};

//copies content to clipboard passed to it
export const copyToClipboard = (txt: string) => {
  navigator.clipboard.writeText(txt).then(
    function () {
      generateSuccessToast(`I have copied ${txt} 🎉`);
    },
    function () {
      generateErrorToast(
        `I had trouble copying ${txt}. Please copy manually 😔`
      );
    }
  );
};

//css utils - Just like media queries but for JS
export const hasWidthGreaterThan = (widthInPixels: string): boolean => {
  return window.matchMedia(`(min-width: ${widthInPixels}px)`).matches;
};

export const hasWidthLesserThan = (widthInPixels: string): boolean => {
  return window.matchMedia(`(max-width: ${widthInPixels}px)`).matches;
};
