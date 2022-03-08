import React, { useEffect, useState } from "react";
import "./App.css";
import DeleteList from "./Components/DeleteList";
import Form from "./Components/Form";
import Lists from "./Components/Lists";

function App() {
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todos"))
  );
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoData));
  }, [todoData]);
  console.log(todoData);
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
      <div className="w-full p-6 m-4 bg-white rounded shadow-2xl lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <DeleteList setTodoData={setTodoData} todoData={todoData} />
        </div>
        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          value={value}
          setValue={setValue}
        />
        <Form
          setTodoData={setTodoData}
          value={value}
          setValue={setValue}
          todoData={todoData}
        />
      </div>
    </div>
  );
}

export default App;
