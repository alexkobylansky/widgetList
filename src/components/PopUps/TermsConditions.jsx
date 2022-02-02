import React, {useEffect, useState} from "react";
import SuccessIcon from "./SuccessIcon";
import PortalComponent from "../PortalComponent";
import CloseIcon from "./CloseIcon";

export default function TermsConditions({isOpen, hideModal}) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(true);
    if (isOpen) {
      const mainDescriptionBlock = document.querySelector('.main-description');
      const mainText = document.querySelector('.main-description p');
      mainDescriptionBlock.addEventListener('scroll', () => {
        const pagePosition = mainText.scrollHeight - mainDescriptionBlock.clientHeight;
        const successButton = document.querySelector('.btn.success-btn');
        if (mainDescriptionBlock.scrollTop === pagePosition) {
          successButton.classList.remove('disabled');
          successButton.classList.add('active');
          setDisabled(false);
        }
        /*console.log('Высота дива:', mainDescriptionBlock.clientHeight);
        console.log('Высота параграфа:', mainText.scrollHeight);
        console.log('Высота прокрутки:', mainDescriptionBlock.scrollTop);
        console.log('Позиция параграфа внизу:', pagePosition);*/
      })
    }
  },[isOpen]);

  if (!isOpen) {
    return null
  } else {
    return (
      <PortalComponent>
        <div className="popup">
          <div className="content">
            <span className="icon close-btn" onClick={hideModal}><CloseIcon/></span>
            <div className="description-block">
              <h2>Terms & Conditions</h2>
              <p className="mini-description"> You should obliged to apply the Terms & Conditions to use the service.</p>
            </div>
            <div className="main-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure molestias nisi numquam, omnis porro soluta suscipit. Amet debitis, distinctio, dolore doloribus
                exercitationem explicabo maiores maxime placeat quasi quo sapiente sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa earum est inventore iure modi molestiae reiciendis vel voluptatum! Ducimus ratione, saepe?
                Architecto molestiae mollitia nam necessitatibus nisi perferendis quam quia.
                Accusamus adipisci architecto assumenda beatae dolore doloribus dolorum
                fugiat id impedit iste itaque laborum laudantium nesciunt numquam odio pariatur possimus, praesentium quas quibusdam quisquam repellendus sed sequi, similique sunt,
                tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure molestias nisi numquam, omnis porro soluta suscipit. Amet debitis, distinctio, dolore doloribus
                exercitationem explicabo maiores maxime placeat quasi quo sapiente sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa earum est inventore iure modi molestiae reiciendis vel voluptatum! Ducimus ratione, saepe?
                Architecto molestiae mollitia nam necessitatibus nisi perferendis quam quia.
                Accusamus adipisci architecto assumenda beatae dolore doloribus dolorum
                fugiat id impedit iste itaque laborum laudantium nesciunt numquam odio pariatur possimus, praesentium quas quibusdam quisquam repellendus sed sequi, similique sunt,
                tempore!
              </p>
            </div>
            <div className="mask"/>
            <button type={"button"} disabled={disabled} onClick={hideModal} className="btn success-btn disabled"><span className="icon"><SuccessIcon/></span>I Agree</button>
          </div>
        </div>
      </PortalComponent>
    )
  }
}