import React from "react";
import BorrowerIcon from "./BorrowerIcon";
import LenderIcon from "./LenderIcon";

export default function DescriptionBlock({role}) {

  if (role === "Borrower") {
    return (
      <div className="description-block">
        <h2>the Borrower</h2>
        <p className="mini-description">You have chosen the role - <b>the Borrower</b>.</p>
        <span className="icon"><BorrowerIcon/></span>
      </div>
    )
  } else if (role === "Lender") {
    return (
      <div className="description-block">
        <h2>the Lender</h2>
        <p className="mini-description">You have chosen the role - <b>the Lender</b>.</p>
        <span className="icon"><LenderIcon/></span>
      </div>
    )
  } else {
    return (
      <div className="description-block">
        <h2>Choose your role</h2>
        <p className="mini-description">Please, choose your role in service.</p>
      </div>
    )
  }
}