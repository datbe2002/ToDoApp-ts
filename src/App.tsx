import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Todo } from "./model";
import TodoListRender from "./components/TodoListRender";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
    console.log(todoList);
  };
  // console.log(todo)
  return (
    <div className="App">
      <span className="heading">Betify</span>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}></Input>
      <TodoListRender
        todoList={todoList}
        setTodoList={setTodoList}
      ></TodoListRender>
    </div>
  );
};

export default App;
