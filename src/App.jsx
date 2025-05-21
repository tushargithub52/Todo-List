import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import './index.css'

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam karle chal", isCompleted: false },
  ]);

  return (
    <div className="flex sm:p-20 w-screen h-screen bg-[#283618] text-[#dad7cd] flex-col lg:flex-row">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
