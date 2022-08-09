import React from "react";

function InforShop(props) {
  console.log(4, props);
  return (
    <div>
      <h6>
        {props.title} {props.icon}
      </h6>
      <p>{props.decription}</p>
    </div>
  );
}

export default InforShop;
