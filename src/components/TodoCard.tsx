import React, { useEffect, useRef, useState } from "react";
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

  const [edit, setEdit] = useState<boolean>(false);

  const [editTodo, setEditTodo] = useState<string | undefined>(todo.todo);

  const handleDone = (id: number | undefined) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number | undefined) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number | undefined) => {
    e.preventDefault();
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__card" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          className="todos__card--test"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        ></input>
      ) : todo.isDone ? (
        <s className="todos__card--text">{todo.todo}</s>
      ) : (
        <span className="todos__card--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
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
