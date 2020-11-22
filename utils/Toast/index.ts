//antd
import { message } from "antd";

export function generateErrorToast(msg: string) {
  message.error(msg);
}
export function generateSuccessToast(msg: string) {
  message.success(msg);
}
export function generateWarningToast(msg: string) {
  message.warning(msg);
}
