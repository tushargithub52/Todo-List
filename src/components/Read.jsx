import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Read = () => {
  const [ todos, settodos ] = useContext(todocontext);

  const handleDelete = (id) => {
    let filteredtodos = todos.filter((todo) => todo.id != id);
    settodos(filteredtodos);
    toast.error('task deleted');
  };

  const rendertodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="w-full text-2xl flex items-center justify-between p-6 bg-[#606c38] rounded mb-5"
      >
        {todo.title}{" "}
        <button 
        className="cursor-pointer rounded-lg bg-[#6f1d1b] px-3 py-2 active:scale-[0.96]"
        onClick={() => handleDelete(todo.id)}>Delete</button>
      </li>
    );
  });

  return (
    <div className="w-[100%] sm:w-[40%] flex items-start flex-col p-10">
      <h2 className="text-6xl sm:text-8xl font-thin mb-15"><span className="text-[#ffe6a7]">Task</span> List</h2>
      <ol className="w-full">{rendertodos}</ol>
    </div>
  );
};

export default Read;
