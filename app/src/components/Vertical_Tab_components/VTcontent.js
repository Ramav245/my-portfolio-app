import React from "react";
import { Box, sizing } from '@mui/system';

function VTcontent(props) {
  let data = props.data.expData;

  return (
    <div
      key={props.index}
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
            <h4>{data.position}</h4>
            <h5>{data.period}</h5>
      <Box
      className="rounded-xl"
      sx={{
        height: 400, 
        width: 400, 
        backgroundImage: `url(${data.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}


      /> 
    </div>
  );
}

export default VTcontent;
