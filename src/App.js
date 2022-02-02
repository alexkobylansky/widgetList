import React, {useState} from "react";
import Header from "./components/Header/Header";
import ChooseRoleBlock from "./components/ChooseRoleBlock/ChooseRoleBlock";
import TermsConditions from "./components/PopUps/TermsConditions";

export default function App() {
  const [role, setRole] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  function showModal() {
    setIsOpen(true);
  }

  function hideModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <div className="container">
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        <main className={toggleMenu ? "open" : ""}>
          <h1>widget list</h1>
          <ChooseRoleBlock role={role} setRole={setRole} showModal={showModal}/>
          <TermsConditions isOpen={isOpen} hideModal={hideModal}/>
        </main>
      </div>
    </div>
  )
}