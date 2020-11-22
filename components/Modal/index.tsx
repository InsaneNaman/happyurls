//utils
import { copyToClipboard } from "utils/common";

//antd
import { Input, Button, Modal } from "antd";
import { CopyOutlined } from "@ant-design/icons";

//helpers
import { toggleModalState } from "./helpers";

export default function happyModal(props) {
  const { urlData, isVisible } = props;

  const shortID = urlData.data?.shortID ?? "";
  const shortURL = `😈😈.ws/${shortID}`;
  return (
    <Modal
      title="Your Happy URL"
      visible={isVisible}
      onOk={(e) => toggleModalState()}
      onCancel={(e) => toggleModalState()}
      okText="Awesome !"
      closable={false}
    >
      <div className="flex flex-col justify-center items-center">
        <Input
          prefix="😈😈.ws/"
          placeholder={shortID}
          size="large"
          value={shortID}
          style={{ borderRadius: "25px" }}
        />
        <Button
          type="primary"
          shape="round"
          onClick={() => copyToClipboard(shortURL)}
          icon={<CopyOutlined />}
          size="middle"
          className="w-40 m-4"
        >
          Copy 👍
        </Button>
      </div>
    </Modal>
  );
}
