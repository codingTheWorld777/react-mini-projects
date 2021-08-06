import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Affrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
  { label: "French", value: "fr"}
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  const InputComponent = (
    <div className="ui form">
      <div className="field">
        <label htmlFor="text" style={{ fontWeight: "bold" }}>
          Enter your text
        </label>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="text"
        />
      </div>
    </div>
  );

  return (
    <div>
      {InputComponent}
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
