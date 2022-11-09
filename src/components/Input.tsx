import React, { useRef } from "react";
import "../css/styles.css";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Input: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter task to do"
        className="input__box"
      ></input>
      <button className="input__submit" type="submit">
        <AiOutlineArrowRight></AiOutlineArrowRight>
      </button>
    </form>
  );
};

export default Input;
