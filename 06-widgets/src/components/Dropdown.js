import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (!ref.current.contains(event.target)) setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {      // will be called if Dropdown is about to stop displaying on screen
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;

    return (
      <div
        key={option.value}
        className="item"
        value={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref} style={{ margin: "10px 0px" }}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">
            <b>{selected.label}</b>
          </div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
