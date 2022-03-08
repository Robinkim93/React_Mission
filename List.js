import React, { useState } from "react";

const List = React.memo(
  ({
    key,
    id,
    title,
    completed,
    todoData,
    setTodoData,
    snapshot,
    provided,
  }) => {
    const [EditHide, setEditHide] = useState(false);
    const [EditValue, setEditValue] = useState("");

    const handleClick = (id) => {
      let newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
    };

    const checkboxChange = (id) => {
      console.log(id);
      let newTodo = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodo);
    };

    const EditBtn = () => {
      setEditHide(!EditHide);
    };

    const EditTodo = (e) => {
      setEditValue(e.target.value);
    };

    const EditFinish = (id) => {
      let newTodo = todoData.map((data) => {
        if (data.id === id) {
          data.title = EditValue;
        }
        return data;
      });
      if (EditValue.length === 0) {
        alert("한글자 이상 입력하세요");
      } else {
        setTodoData(newTodo);
        EditBtn();
      }
    };

    const onSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <div className="items-center">
        {EditHide ? (
          <form
            onSubmit={onSubmit}
            className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100"
          >
            <div>
              <input
                className="w-full px-2 py-2 mr-5 text-gray-500 border rounded shadow-lg bg-gray-100"
                onChange={EditTodo}
                value={EditValue}
              />
            </div>
            <div>
              <button
                className="px-1 py-2 mr-1  text-blue-400 border-2  border-blue-400 rounded hover:text-white hover:bg-blue-200"
                onClick={() => EditFinish(id)}
              >
                수정완료
              </button>
              <button
                className="px-1 py-2 mr-1 text-blue-400 border-2  border-blue-400 rounded hover:text-white hover:bg-blue-200"
                onClick={EditBtn}
              >
                수정취소
              </button>
            </div>
          </form>
        ) : (
          <>
            <div
              className={`${
                snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
              } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600    border rounded`}
              key={key}
              {...provided.draggableProps}
              ref={provided.innerRef}
              {...provided.dragHandleProps}
            >
              <div className="items-center">
                <input
                  className="mr-2"
                  type="checkbox"
                  defaultChecked={completed}
                  onChange={() => checkboxChange()}
                />
                <span className={`${completed ? "line-through" : null} mr-8`}>
                  {title}
                </span>
              </div>
              <div>
                <button
                  className="px-1 py-2 mr-1 text-blue-400 border-2  border-blue-400 rounded hover:text-white hover:bg-blue-200"
                  onClick={EditBtn}
                >
                  수정
                </button>
                <button
                  className="px-1 py-2 float-right text-blue-400 border-2  border-blue-400 rounded hover:text-white hover:bg-blue-200"
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
);

export default List;
