import React from "react";
import Card from '../Card';

function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left" }}>
      <Card
        onClick={Clicked}
        title={props.data.expData.cardtitle}
        desc={props.data.expData.cardDesc}
      >
        {props.data.expData.company}
      </Card>
    </li>
  );
}

export default VTlist;
