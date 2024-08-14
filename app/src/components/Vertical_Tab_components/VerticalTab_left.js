import React, { useState } from "react";

import VTlist from "./VTlist";
import VTcontent from "./VTcontent";

function VerticalTabL(props) {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
  }

  return (
      <div class="flex flex-row justify-around place-items-start">
          {/* Left side vertical list */}
          <div>
            <ul>
              {props.data.map((job, index) => (
                <VTlist
                  key={index}
                  onClick={() => btnClick(index)}
                  data={job}
                  index={index}
                  activeTabId={activeTabId}
                />
              ))}
            </ul>
          </div>
      
          {/* Right side content display (flexbox) */}
          <div>
            {props.data.map((job, index) => (
              <VTcontent
                data={job}
                key={index}
                index={index}
                activeTabId={activeTabId}
              />
            ))}
          </div>
        </div>
  );
}

export default VerticalTabL;

