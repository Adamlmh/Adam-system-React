import HeaderBottom from "./header_bottom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const navigateName = useSelector((state) => state.navigateName.navigateName);
  function changePrimaryColor(color, backgroundColor) {
    document.documentElement.style.setProperty("--primary-color", color);
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
  }
  return (
    <header className="layout_header">
      <div className="header_top">
        <div className="top_left">
          <span className="iconfont icon-sanhengxian"></span>
          <div className="Route_correspondence">
            <span className={`iconfont ${navigateName[1]}`}></span>
            <span>{navigateName[0]}</span>
          </div>
        </div>
        <div className="top_right">
          <div className="top_right_item">
            <button
              type="button"
              className="btn iconfont icon-tongzhizhongxin"
            ></button>
          </div>
          <div className="top_right_item">
            <button
              type="button"
              className="btn iconfont icon-shijian"
            ></button>
          </div>
          <div className="top_right_item">
            <button type="button" className="btn iconfont icon-diqiu"></button>
          </div>
          <div className="top_right_item">
            <button
              type="button"
              className="btn iconfont icon-guanyuwomen"
            ></button>
          </div>
          <div className="top_right_item">
            <a href="https://github.com/Adamlmh">
              <button
                type="button"
                className="btn iconfont icon-GitHub"
              ></button>
            </a>
          </div>
          <div className="top_right_item">
            <Link to={"/"}>
              <button
                type="button"
                className="btn iconfont icon-guanji"
              ></button>
            </Link>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <HeaderBottom />
        <div className="colorSelect">
          <div className="top_right_item">
            <button
              type="button"
              className="btn iconfont icon-hongdian"
              id="redBtn"
              onClick={() => changePrimaryColor("#ff3030", "#fff2f0")}
            ></button>
          </div>
          <div className="top_right_item">
            <button
              type="button"
              className="btn iconfont icon-landian-SVG"
              id="blueBtn"
              onClick={() => changePrimaryColor("#078dee", "#e6f9ff")}
            ></button>
          </div>
          <div className="top_right_item">
            <button
              type="button"
              className="btn iconfont icon-huangdian"
              id="YellowBtn"
              onClick={() => changePrimaryColor("#fda92d", "#fffbf0")}
            ></button>
          </div>
          <div className="top_right_item">
            <button
              type="button"
              className="btn iconfont icon-lvdian"
              id="greenBtn"
              onClick={() => changePrimaryColor("#00a76f", "#cfe6da")}
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
