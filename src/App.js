import React from "react";
import Card from "./Card";

const App = () => {
  const data = [
    {
      titleTop: "FREE",
      symbol: "$",
      money: 0,
      feature: [
        {
          title: "Single User",
          isEnabled: true,
        },
        {
          title: "5GB Storage",
          isEnabled: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          title: "Community Access",
          isEnabled: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnabled: false,
        },
        {
          title: "Dedicated Phone Support",
          isEnabled: false,
        },
        {
          title: "Free Subdomain",
          isEnabled: false,
        },
        {
          title: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      titleTop: "PLUS",
      symbol: "$",
      money: 9,
      feature: [
        {
          title: "5 Users",
          isEnabled: true,
          isBold: true,
        },
        {
          title: "50GB Storage",
          isEnabled: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          title: "Community Access",
          isEnabled: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          title: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          title: "Free Subdomain",
          isEnabled: true,
        },
        {
          title: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      titleTop: "PRO",
      symbol: "$",
      money: 49,
      feature: [
        {
          title: "Unlimited Users",
          isEnabled: true,
          isBold: true,
        },
        {
          title: "150GB Storage",
          isEnabled: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          title: "Community Access",
          isEnabled: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          title: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          title: "Unlimited",
          isEnabled: true,
          Bolded: true,
        },
        {
          title: "Monthly Status Reports",
          isEnabled: true,
        },
      ],
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card cardData={data[0]} />
          <Card cardData={data[1]} />
          <Card cardData={data[2]} />
        </div>
      </div>
    </section>
  );
};

export default App;
