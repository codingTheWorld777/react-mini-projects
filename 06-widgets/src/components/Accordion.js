import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClickItem = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onClickItem(index)}>
          <i className="dropdown icon"></i>
          <span style={{ fontWeight: "bold" }}>{item.title}</span>
        </div>

        <div className={`content ${active}`}>
          <span className="transition visible">{item.content}</span>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
