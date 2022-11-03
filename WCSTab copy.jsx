import "./tab.scss";
import { useState } from "react";

const WCSTab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
      <div className="wcs_container">
        <div className="wcs_block-tabs">
          <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>TAB1</div>
          <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} >TAB2</div>
          <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)} >TAB3</div>
        </div>

        <div className="content-tabs">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
              <h2>Content 1</h2>
          </div>
          <div className={toggleState === 2 ? "content  active-content" : "content"}>
              <h2>Content 2</h2>
          </div>
          <div className={toggleState === 3 ? "content  active-content" : "content"}>
              <h2>Content 3</h2>
          </div>
        </div>
      </div>
  )
}

export default WCSTab