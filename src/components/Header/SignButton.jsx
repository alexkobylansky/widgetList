import React from "react";
export default function SignButton({className, icon, value, textValue}) {
  return <button type="button" className={className} value={value}><span className="icon">{icon}</span>{textValue}</button>
}