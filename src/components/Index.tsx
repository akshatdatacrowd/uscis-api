import { BsCircleFill } from "react-icons/bs";

const Index = () => {
  return (
    <div className="indexMainBody">
      <div className="leftPanel">
        <h1>Case Status</h1>
        <h1>JSON API</h1>
      </div>
      <div className="rightPanel">
        <div className="window">
          <div className="topbar">
            <div className="topbarbtns">
              <div className="topbarred">
                <BsCircleFill color="#FF605C" />
              </div>
              <div className="topbarred">
                <BsCircleFill color=" #FFBD44" />
              </div>
              <div className="topbarred">
                <BsCircleFill color="#00CA4E" />
              </div>
            </div>
          </div>
          <div className="bodywindow">
            <div className="sidebarWindow"></div>
            <div className="mainWindow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
