import { STATE } from "state/pullState";

export const toggleModalState = () =>
  STATE.update((s) => {
    s.launchShortURLPreviewModal = !s.launchShortURLPreviewModal;
  });
