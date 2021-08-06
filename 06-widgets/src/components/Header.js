import React, { useState } from "react";
import Link from "./Link";

const listItems = [
  { name: "Accordion", path: "/" },
  { name: "List", path: "/list" },
  { name: "Dropdown", path: "/dropdown" },
  { name: "Translation", path: "/translate" },
];

const Header = () => {
  const [activeItem, setActiveItem] = useState(0);

  const renderedItems = listItems.map((item, index) => {
    const active = index === activeItem ? "active" : null;

    return (
      <Link
        key={item.name}
        href={item.path}
        className={`${active} item`}
        index={index}
        onLinkClick={setActiveItem}
      >
        {item.name}
      </Link>
    );
  });

  return <div className="ui secondary pointing menu">{renderedItems}</div>;
};

export default Header;
