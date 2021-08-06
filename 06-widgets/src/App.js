import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Header from "./components/Header";
import Route from "./components/Route";

const items = [
  { title: "React", content: "Learn how to build a dynamic app." },
  { title: "ReactNative", content: "Build mobile app." },
  { title: "JS", content: "A langage that helps to build a dynamic web" },
];

const options = [
  { value: "Red", label: "The color of blood" },
  { value: "Green", label: "The color of the Earth" },
  { value: "Blue", label: "The color of hope and peace" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <div className="ui container" style={{ marginTop: "40px" }}>
        <Route path="/">
          <Accordion items={items} />
        </Route>

        <Route path="/list">
          <Search />
        </Route>

        <Route path="/dropdown">
          <Dropdown
            label="Select an option"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </Route>

        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    </div>
  );
};

export default App;
