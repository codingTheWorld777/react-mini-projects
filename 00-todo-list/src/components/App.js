import React, { useState } from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const updateTodoList = (todoItem) => {
    /** 
     * Not working ?? Maybe we cannot modify todoItem directly and after 
     * that we use setTodoList to update todoList then nothing will happen and 
     * component App will not rerender ?
     */
    // todoList.push(todoItem);
    // setTodoList(todoList);

    // Working magically
    setTodoList(todoList.concat([todoItem]));
  };

  return (
    <div className="ui container" style={{ marginTop: "40px" }}>
      <InputBar onTodoChange={updateTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
