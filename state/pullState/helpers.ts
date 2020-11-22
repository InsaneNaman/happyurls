import { STATE } from "./index";

//util to update global state outside components
export const updateStateValue = (args) => {
  if (typeof args === "object" && args !== null) {
    STATE.update((s) => {
      s[args.key] = args.value;
    });
  }

  if (Array.isArray(args) && args.length) {
    args.map((arg) => {
      STATE.update((s) => {
        s[arg.key] = arg.value;
      });
    });
  }
};
