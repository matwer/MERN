import "./App.css";
import React, { useState } from "react";

import Tabs from "./components/Tabs";
import ShowContent from "./components/ShowContent";

function App() {
  // creating tabs with predefined content
  const [tabs, setTabs] = useState([
    { header: "Tab 1", content: "Lions" },
    { header: "Tab 2", content: "Tigers" },
    { header: "Tab 3", content: "Bears" },
  ]);

  const [index, setIndex] = useState(0); // creating a variable to hold the index of the tab that's been selected

  // passes the index of the tab that's currently selected to Tabs.jsx
  const getIndex = (idx) => {
    // verify we're getting what we expect
    // console.log("index " + idx)
    // use setIndex to set the index to the current index
    setIndex(idx);
  };

  return (
    <div className="App">
      <fieldset>
        <legend>Tabs</legend>
        {/* tabs: {JSON.stringify(tabs)} */}
        {tabs.map((tab, i) => {
          return (
            <Tabs key={i} tab={tab} idx={i} tabs={tabs} getIndex={getIndex} />
          );
        })}
        {/* pass the selected tab to the ShowContent component */}
        <ShowContent tab={tabs[index]} />
      </fieldset>
    </div>
  );
}

export default App;
