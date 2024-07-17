import "./style.css";
import HeadCard from "./headCard";
import ContainerLeft from "./containerLeft";
import ContainerRight from "./containerRight";

function Personalcenter() {
  return (
    <main className="layout_content" id="mainContent">
      <HeadCard />
      <div className="content_detail">
        <div className="container">
          <ContainerLeft />
          <ContainerRight />
        </div>
      </div>
    </main>
  );
}
export default Personalcenter;
