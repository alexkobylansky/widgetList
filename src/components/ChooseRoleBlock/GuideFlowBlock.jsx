import React from "react";
import GuideIcon from "./GuideIcon";

export default function GuideFlowBlock({role, showModal}) {

  if(role === "Borrower"){
    return (
      <div className="guide-flow-block">
        <button type={"button"} className={"btn flow-btn"} onClick={showModal}><span className="icon"><GuideIcon/></span>Guide Flow</button>
        <p>Study the guide flow for the convenience of using the service.</p>
      </div>
    )
  } else if(role === "Lender") {
    return (
      <div className="guide-flow-block">
        <button type={"button"} className={"btn flow-btn"} onClick={showModal}><span className="icon"><GuideIcon/></span>Guide Flow</button>
        <p>Study the guide flow for the convenience of using the service.</p>
      </div>
    )
  } else return null;
}