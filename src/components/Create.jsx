import { nanoid } from "nanoid";
import { useState } from "react";
const Create = (props) => {
  const {todos, settodos} = props  
  const [title, settitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    let newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    // let copy = [...todos]
    // copy.push(newtodo)
    // settodos(copy)

    settodos([...todos, newtodo]);

    settitle("");
  };
  return (
    <div className="w-[100%] sm:w-[60%] p-10">
      <h1 className="text-6xl sm:text-8xl font-thin mb-15"><span className="text-[#ffe6a7]">Schedule</span> Your Tasks</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border-b text-2xl px-3 py-1 outline-none mb-12"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Enter todo-title"
        />
        <button className="border px-5 py-3 text-xl rounded-xl cursor-pointer active:scale-[0.95]">Create todo</button>
      </form>
    </div>
  );
};

export default Create;
