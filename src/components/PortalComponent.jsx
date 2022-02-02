import {useState, useEffect} from "react";
import ReactDOM from "react-dom";

export default function PortalComponent({children}) {
  const [container] = useState(() => document.createElement('div'));
  const main = document.querySelector('main');

  useEffect(() => {
    main.appendChild(container);
    return () => {
      main.removeChild(container);
    }
  }, []);

  return ReactDOM.createPortal(children, container);
}