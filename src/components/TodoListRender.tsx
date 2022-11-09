import React from "react";
import { Todo } from "../model";
import "../css/styles.css";
import TodoCard from "./TodoCard";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListRender: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <div className="todos">
      {todoList.map((todo) => (
        <TodoCard
          todo={todo}
          key={todo.id}
          todoList={todoList}
          setTodoList={setTodoList}
        ></TodoCard>
      ))}
    </div>
  );
};

export default TodoListRender;
