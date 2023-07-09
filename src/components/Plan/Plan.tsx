import PlanItem from "./PlanItem";

const Plan = () => {
  const planItems = [
    {
      header: {
        name: "Silver",
        price: "$99",
        cycle: "/month",
        discount: "5% OFF",
        description: "Easy start on the cloud",
      },
      body: [
        "Unlimited Websites",
        "Unlimited Bandwidth",
        "100 GB SSD Sotrage",
        "3 GB RAM",
      ],
      buttonName: "Buy Now",
    },
    {
      header: {
        name: "Gold",
        price: "$149",
        cycle: "/month",
        discount: "5% OFF",
        description: "Easy start on the cloud",
      },
      body: [
        "Unlimited Websites",
        "Unlimited Bandwidth",
        "100 GB SSD Sotrage",
        "3 GB RAM",
      ],
      buttonName: "Buy Now",
      popular: true,
    },
    {
      header: {
        name: "Diamond",
        price: "$199",
        cycle: "/month",
        discount: "5% OFF",
        description: "Easy start on the cloud",
      },
      body: [
        "Unlimited Websites",
        "Unlimited Bandwidth",
        "100 GB SSD Sotrage",
        "3 GB RAM",
      ],
      buttonName: "Buy Now",
      primary: true,
    },
  ];
  return (
    <section data-aos="fade-up" className="block container block-plans">
      <div className="grid grid--1x3">
        {planItems.map((plan, index) => (
          <PlanItem
            key={index}
            header={plan.header}
            body={plan.body}
            buttonName={plan.buttonName}
            popular={plan.popular}
            primary={plan.primary}
          />
        ))}
      </div>
    </section>
  );
};

export default Plan;
