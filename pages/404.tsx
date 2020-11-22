//lottie
import { Player } from "@lottiefiles/react-lottie-player";

//antd
import { Tooltip } from "antd";

export default function awesome404() {
  return (
    <div className={`flex flex-col justify-center items-center h-screen `}>
      <div className="flex flex-col text-center m-10">
        <div className="text-xl lg:text-2xl mb-5 ">
          Sorry That's A Bad Link 😢
        </div>

        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_GIyuXJ.json"
          style={{ height: "30vh" }}
        />
      </div>

      <footer className="flex flex-wrap text-center justify-center mt-20 justify-self-end">
        <div> Built With ❤️ and 🔥 by</div>
        <div>
          <Tooltip placement="top" title="Find Me On Twitter">
            <a
              href="https://twitter.com/InsaneNaman"
              target="_blank"
              rel="noopener"
            >
              <span className="gradientTextNeonPink">&nbsp; Naman Gupta</span>
            </a>
          </Tooltip>
        </div>
      </footer>
    </div>
  );
}
