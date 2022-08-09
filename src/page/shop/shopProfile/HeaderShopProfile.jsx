import React from "react";

function HeaderShopProfile(props) {
  return (
    <div>
      <a href={props.href}>{props.title}</a>
      <h2>{props.decription}</h2>
    </div>
  );
}

export default HeaderShopProfile;
