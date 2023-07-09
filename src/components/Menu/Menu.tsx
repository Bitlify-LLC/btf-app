import { Link } from "react-router-dom";
import Account from "../Account/Account";

interface Props {
  items: { name: string; ref: string }[];
  onMenuItemClick: (item: string) => void;
}
const Menu = ({ items = [], onMenuItemClick }: Props) => {
  return (
    <ul className="list nav__list collapsible__content">
      {items.map((item, index) => (
        <li key={index} className="nav__item">
          <Link to={`/${item.name}`} onClick={() => onMenuItemClick(item.name)}>
            {item.name}
          </Link>
        </li>
      ))}

      <Account />
    </ul>
  );
};

export default Menu;
