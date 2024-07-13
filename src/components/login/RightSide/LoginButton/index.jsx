import { useState } from "react";

function LoginButton() {
  //用useState來控制按鈕的hover效果
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="item">
      <div className="item_input">
        <div className="item_input_content">
          <button
            type="submit"
            className={"submitBtn" + (isHovered ? " bgcolor" : "")}
            id="submitBtn"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <span style={{ color: "white" }} id="submitSpan">
              登 录
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginButton;
