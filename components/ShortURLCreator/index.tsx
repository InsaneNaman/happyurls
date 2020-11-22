import { useState } from "react";

//styles
import styles from "./shortURlCreator.module.scss";

//lottie-player
import { Player } from "@lottiefiles/react-lottie-player";

//helpers
import { validateAndCreateShortURL } from "./helpers";

import HappyModal from "components/Modal";

//global store
import { STATE } from "state/pullState";

//antd
import { Image, Button, Tooltip, Input } from "antd";

export default function ShortURLCreator(props) {
  const isURLUnderProcess = STATE.useState((s) => s.isURLLoading);

  const urlData = STATE.useState((s) => s.urlData);
  const isModalVisible = STATE.useState((s) => s.launchShortURLPreviewModal);

  const lastLongURL = STATE.useState((s) => s.longURL);

  const [newLongURL, setNewLongURL] = useState<string>("");

  return (
    <section className={`flex flex-col justify-center items-center`}>
      <div className="flex flex-wrap justify-center items-center text-5xl m-5">
        <div className="text-center ">Create Your Own</div>
        <div>
          <Player
            autoplay
            loop
            src="/blushemoji-lottie.json"
            style={{ height: "7rem", width: "7rem" }}
          />
        </div>
        <div className="text-center gradientTextNeonPink">URL</div>
      </div>
      <div className="mb-4">An Open Source Modern URL Shortener </div>
      <div className="flex flex-col justify-center items-center m-5">
        <div>
          <Tooltip
            trigger={["focus"]}
            title="Tell Me Your Awesome Domain"
            placement="topLeft"
            overlayClassName="numeric-input"
          >
            <Input
              placeholder="Enter or Paste Your URL"
              size="large"
              value={newLongURL}
              onPressEnter={(e) =>
                validateAndCreateShortURL(
                  lastLongURL,
                  (e.target as HTMLInputElement).value
                )
              }
              onChange={(e) => setNewLongURL(e.target.value)}
              className={styles.urlInput}
              bordered={false}
              allowClear={true}
              disabled={isURLUnderProcess}
              style={{
                border: "1px solid grey",
                borderRadius: "25px",
                fontSize: "1.5rem",
              }}
            />
          </Tooltip>
        </div>
        <div className="mt-5">
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{ height: "3rem", fontSize: "1.25rem" }}
            loading={isURLUnderProcess}
            onClick={() => validateAndCreateShortURL(lastLongURL, newLongURL)}
          >
            Shorten 🚀
          </Button>
          <HappyModal isVisible={isModalVisible} urlData={urlData} />
        </div>
      </div>
      <div className=" text-center flex justify-center items-center mt-10 fade-in">
        <Image className="w-2/5" src={"/smileBG.svg"} preview={false} />
      </div>
    </section>
  );
}
