import React from "react";

import { LISTS } from "./components/constants";
import Content from "./components/content";
import Pagination from "./components/pagination";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="item">
        Items 1 - {LISTS.length} of {LISTS.length}
      </div>
      <Content lists={LISTS} />
      <Pagination page={1} />
    </div>
  );
}

export default App;
