import React, { useState } from "react";

import VTlist from "./VTlist";
import VTcontent from "./VTcontent";

function VerticalTabR(props) {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
  }

  return (
      <div class="flex flex-row justify-around place-items-start">
          {/* Left side vertical list */}
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

          
        {/* Right side content display (flexbox) */}
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
    </div>
  );
}

export default VerticalTabR;

