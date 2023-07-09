interface Props {
  dropDownList: string[];
  expanded?: boolean;
  clickItem: (item: string) => void;
}
const Dropdown = ({
  dropDownList = [],
  expanded = false,
  clickItem,
}: Props) => {
  const style = expanded ? "show" : "";

  return (
    <div className="dropdown">
      <div className="block--dark dropdown__content">
        <div className={style}>
          <ul className="list dropdown__content dropdown__hide">
            {dropDownList.length &&
              dropDownList.map((item, index) => (
                <li
                  key={index}
                  className="list__item"
                  onClick={() => clickItem(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
