import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import Todo from "../components/Todo";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch("http://localhost:3000/api/todo")
        .then((res) => res.json())
        .catch((err) => console.log(err));

      setTodos(res);
    };

    fetchTodo();
  }, [todos]);

  return (
    <div>
      <Navbar />
      <InputForm />
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default Home;
