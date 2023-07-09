interface Props {
  header: {
    name: string;
    price: string;
    cycle: string;
    discount: string;
    description: string;
  };
  body: string[];
  buttonName: string;
  primary?: boolean;
  popular?: boolean;
}
const PlanItem = ({ header, body, buttonName, primary, popular }: Props) => {
  const planClass = popular ? "plan plan--popular" : "plan";
  const cardClass = primary ? "card card--primary" : "card card--secondary";
  return (
    <div className={planClass}>
      <div className={cardClass}>
        <header className="card__header">
          <h3 className="plan__name">{header.name}</h3>
          <span className="plan__price">{header.price}</span>
          <span className="plan__billing-cycle">{header.cycle}</span>
          <span className="badge badge--secondary badge--small">
            {header.discount}
          </span>
          <span className="plan__description">{header.description}</span>
        </header>
        <div className="card__body">
          <ul className="list list--tick">
            {body.map((item, index) => (
              <li className="list__item" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <button className="btn btn--outline btn--block">{buttonName}</button>
        </div>
      </div>
    </div>
  );
};

export default PlanItem;
