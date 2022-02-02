import React from "react";

export default function GoToCabinetButton({icon, showModal}) {
  return (
    //ToDo: Add React Router function to go to personal cabinet
    <button type={"button"} className={"btn main-btn"} onClick={showModal}><span className="icon">{icon}</span>Go To Cabinet</button>
  )

}