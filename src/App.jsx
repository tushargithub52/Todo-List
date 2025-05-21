import Create from "./components/Create";
import Read from "./components/Read";
import './index.css'

const App = () => {

  return (
    <div className="flex sm:p-20 w-screen h-screen bg-[#283618] text-[#dad7cd] flex-col lg:flex-row">
      <Create />
      <Read />
    </div>
  );
};

export default App;