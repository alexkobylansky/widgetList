import React from "react";
import ChooseButton from "./ChooseButton";
import GoToCabinetButton from "./GoToCabinetButton";
import CancelButton from "./CancelButton";
import BorrowerIcon from "./BorrowerIcon";
import LenderIcon from "./LenderIcon";

export default function ButtonBlock({role, setRole}) {
  if (role === "Borrower") {
    return (
      <div className="button-block">
        <GoToCabinetButton icon={<BorrowerIcon/>}/>
        <CancelButton setRole={setRole}/>
      </div>
    )
  } else if (role === "Lender") {
    return (
      <div className="button-block">
        <GoToCabinetButton icon={<LenderIcon/>}/>
        <CancelButton setRole={setRole}/>
      </div>
    )
  } else {
    return (
      <div className="button-block">
        <ChooseButton icon={<BorrowerIcon/>} value="Borrower" textValue="The Borrower" setRole={setRole}/>
        <ChooseButton icon={<LenderIcon/>} value="Lender" textValue="The Lender" setRole={setRole}/>
      </div>
    )
  }
}