import React from "react";
import ButtonBlock from "./ButtonBlock";
import DescriptionBlock from "./DescriptionBlock";
import GuideFlowBlock from "./GuideFlowBlock";

export default function ChooseRoleBlock({role, setRole, showModal}) {

  return (
    <>
      <div className="choose-block">
        <DescriptionBlock role={role}/>
        <ButtonBlock setRole={setRole} role={role}/>
      </div>
      <GuideFlowBlock role={role} showModal={showModal}/>
    </>
  )
}