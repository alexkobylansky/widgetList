import React from "react";

export default function NavItem({valueName, item}) {

  return (
    item.submenu.length ? <li className="main-menu-item submenu"><a href="#">{valueName}</a>
      <ul className={"main-submenu hidden"}>
        {item.submenu.map(item => <li key={item} className="item-submenu"><a href="#">{item}</a></li>)}
      </ul>
    </li> : <li className="main-menu-item"><a href="#">{valueName}</a></li>
  )
}