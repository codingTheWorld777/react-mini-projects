import React, { useState } from "react";

const InputBar = ({ onTodoChange }) => {
  const [todoItem, setTodoItem] = useState("");

  const onSubmitChange = (e) => {
    e.preventDefault();
    onTodoChange(todoItem);
    setTodoItem("");
  };

  return (
    <form className="ui form" onSubmit={onSubmitChange}>
      <div className="field">
        <label htmlFor="todo-input">
          <b>Add TodoList</b>
        </label>
        <input
          type="text"
          id="todo-input"
          name="todo"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          placeholder="Add your todo..."
        />
      </div>
    </form>
  );
};

export default InputBar;
