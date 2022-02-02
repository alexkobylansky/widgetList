import React from "react";

export default function ChooseButton({icon, value, textValue, setRole}) {
  return (
    <button type="button" className={"btn main-btn"} value={value} onClick={event => setRole(event.currentTarget.value)}><span className="icon">{icon}</span>{textValue}</button>
  )
}