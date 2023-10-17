import { useState } from "react";
import Menu from "../Menu/Menu";
import Icon from "../Icon";
import "./NavBar.css";

import { SiBitly } from "react-icons/si";

interface Props {
  onMenuItemClick: (item: string) => void;
}
const menuItems = [
  {
    name: "Hosting",
    ref: "",
  },
  {
    name: "Domain",
    ref: "",
  },
  {
    name: "DNS",
    ref: "",
  },
  {
    name: "VPS",
    ref: "",
  },
  {
    name: "Pricing",
    ref: "",
  },
];

const NavBar = ({ onMenuItemClick }: Props) => {
  let [style, setStyle] = useState("nav collapsible");

  const handleChevronClick = () => {
    style === "nav collapsible"
      ? setStyle("nav collapsible expanded")
      : setStyle("nav collapsible");
  };

  return (
    <nav className={style}>
      <a aria-label="Bitlify" className="nav__brand" href="/">
        {/* <img src="icons/bitlify.png" alt="Logo" /> */}
        <SiBitly color="white" size="40" />
        Bitlify
      </a>

      <span className="nav__toggler" onClick={handleChevronClick}>
        <Icon name="menu" refs="images/sprite.svg#menu" color="white" />
      </span>

      <Menu items={menuItems} onMenuItemClick={onMenuItemClick} />
    </nav>
  );
};

export default NavBar;
