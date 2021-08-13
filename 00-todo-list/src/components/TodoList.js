import React from "react";

const TodoList = ({ todoList }) => {
  const renderedList = todoList.map((todoItem, index) => {
    return <li key={index}>{todoItem}</li>;
  });

  return (
    <div style={{ marginTop: "20px" }}>
      <b>This is a list that u have to do:</b>
      <ul className="ui list">{renderedList}</ul>
    </div>
  );
};

export default TodoList;
