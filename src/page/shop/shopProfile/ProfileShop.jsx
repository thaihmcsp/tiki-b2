import React from "react";

function ProfileShop(props) {
  return (
    <div className="Footer-ProfileShop">
      <a href={props.href}>{props.title}</a>
      <i>{props.plus}</i>
      <h2>{props.decription}</h2>
    </div>
  );
}

export default ProfileShop;
