import { useState } from "react";
import Menu from "./Menu";
import Icon from "./Icon";

const NavBar = () => {
  let [style, setStyle] = useState("nav collapsible");
    
    const handleChevronClick = () => {
        style === "nav collapsible" ? setStyle("nav collapsible expanded") : setStyle("nav collapsible");
    }
    const menuItems = [
    {
        name: "Domain",
        ref: ""
    },
    {
        name: "Hosting",
        ref: ""
    },
    {
        name: "VPS",
        ref: ""
    },
    {
        name: "Pricing",
        ref: ""
    }
    ]

    return ( 
        <nav className={style}>
          <a aria-label="Bitlify" className="nav__brand" href="/">
            <img src="icons/bitlify.png" alt="Logo" />
          </a>
          
          <span className="nav__toggler" onClick={handleChevronClick}>
                <Icon name="menu" refs= "images/sprite.svg#menu" color="white" />
          </span>

          <Menu items={menuItems} />
        </nav>
     );
}
 
export default NavBar;