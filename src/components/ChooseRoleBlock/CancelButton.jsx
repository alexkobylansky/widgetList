import React from "react";
import CancelIcon from "./CancelIcon";

export default function CancelButton({setRole}) {
  return (
    <button type={"button"} className={"btn cancel-btn"} value={""} onClick={event => setRole(event.currentTarget.value)}><span className="icon"><CancelIcon/></span>Cancel</button>
  )
}