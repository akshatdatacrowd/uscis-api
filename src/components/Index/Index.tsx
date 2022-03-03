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
            <div className="sidebarWindow">
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
            </div>
            <div className="mainWindow">
              <p>GET https://data.fixer.io/api/latest</p>

              <p>"base": USD,</p>
              <p>"date": "2018-02-13",</p>
              <p>"rates": </p>
              <p>"CAD": 1.260046,</p>
              <p>"CHF": 0.933058,</p>
              <p>"EUR": 0.806942,</p>
              <p>"GBP": 0.719154,</p>
              <p>[170 world currencies]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
