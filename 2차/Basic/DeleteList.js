import React from "react";

function DeleteList({ setTodoData }) {
  const DeleteAll = () => {
    setTodoData([]);
  };
  return (
    <div>
      <button
        className="p-2 text-blue-400 border-2  border-blue-400 rounded hover:text-black hover:bg-red-500 "
        onClick={DeleteAll}
      >
        Clear
      </button>
    </div>
  );
}

export default DeleteList;
