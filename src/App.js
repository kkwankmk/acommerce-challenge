import React, { useState } from "react";

import { LISTS } from "./components/constants";
import Content from "./components/content";
import Pagination from "./components/pagination";
import "./App.css";

const MAX_ITEM = 12;

function App() {
  const [page, setPage] = useState(1);

  const itemLength = LISTS.length;
  const firstItem = (page - 1) * 12 + 1;
  const lastItem = page * MAX_ITEM > itemLength ? itemLength : page * MAX_ITEM;

  return (
    <div className="app">
      <div className="item">
        Items {firstItem} - {lastItem} of {itemLength}
      </div>
      <Content lists={LISTS.slice(firstItem - 1, lastItem)} />
      <Pagination
        page={page}
        onPageChange={page => setPage(page)}
        total={Math.ceil(LISTS.length / MAX_ITEM)}
      />
    </div>
  );
}

export default App;
