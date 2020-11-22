import { Tooltip } from "antd";
export default function Footer() {
  return (
    <footer className="flex flex-wrap text-center justify-center m-10 fade-in">
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
  );
}
