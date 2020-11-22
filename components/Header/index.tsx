//antd
import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="flex justify-center items-center p-3 border-b border-solid">
      <div className="text-xl lg:text-2xl xl:text-3xl ml-5">😈😈.ws</div>
      <div className="flex-grow"></div>
      <div className="text-lg lg:text-xl xl:text-2xl mr-5 ">
        <TwitterOutlined
          className="hover:text-pink-600 "
          onClick={() => window.open("https://twitter.com/InsaneNaman")}
        />
        <GithubOutlined
          onClick={() => window.open("https://github.com/InsaneNaman/happyurl")}
          className="hover:text-pink-600 ml-4"
        />
      </div>
    </div>
  );
}
