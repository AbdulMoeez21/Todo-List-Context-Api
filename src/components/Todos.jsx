import React, { useContext } from "react";
// import Todo from "./Todo";
import { TodoContext } from "../context/TodoProvider";
import TodoInput from "./TodoInput";
import Todo from "./Todo";
const Todos = (props) => {
  const todoContext = useContext(TodoContext);
  console.log(todoContext);
  // const { todos } = todoContext;
  console.log(todoContext);
  return (
    <div className="todo">
      <TodoInput />
      <ul className="todo-body">
        {todoContext.todos.map((todo) => (
         <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
