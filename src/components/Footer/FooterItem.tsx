import { useState } from "react";
import Icon from "../Icon";

interface Props {
  title: string;
  icon: string;
  content: { refs: string; label: string; target?: string }[];
  expanded?: boolean;
}
const FooterItem = ({ title, content = [], icon, expanded = false }: Props) => {
  const [expand, setExpand] = useState(expanded);
  const style = expand ? "collapsible expanded" : "collapsible";
  return (
    <section className={style}>
      <div className="footer__section">
        <header className="collapsible__header">
          <h2 className="collapsible__heading footer__heading">{title}</h2>

          <span
            className="collapsible__chevron"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <Icon name={icon} color="white" refs="images/sprite.svg#chevron" />
          </span>
        </header>

        <div className="collapsible__content">
          <ul className="list">
            {content &&
              content.map((item, index) => {
                return (
                  <li className="list__item" key={index}>
                    <a target={item.target} href={item.refs}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterItem;
