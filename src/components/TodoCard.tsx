import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "../css/styles.css";

type Props = {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const TodoCard = ({ todo, setTodoList, todoList }: Props) => {
  //   console.log(todo.id);
  const handleDone = (id: number | undefined) => {
    setTodoList(
      todoList.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };
  return (
    <form className="todos__card">
      {todo.isDone ? (
        <s className="todos__card--text">{todo.todo}</s>
      ) : (
        <span className="todos__card--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
