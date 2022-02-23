import React, { useState } from "react";
import List from "./List";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  const handleClear = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className='container'>
        <h2>{people.length} BirthDay today</h2>

        <List people={people} />
        <button onClick={handleClear}>clear All</button>
      </section>
    </main>
  );
};

export default App;
