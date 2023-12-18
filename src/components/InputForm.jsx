import React, { useState } from "react";

const InputForm = () => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { todo };

    const res = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      setError(data.error);
    }

    if (res.ok) {
      setTodo("");
      setError(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 mb-8 flex align-items-center justify-center gap-4"
    >
      <input
        className="w-[400px] border-2 border-[#B0AFAF] rounded-[8px] font-medium outline-none py-1 px-2"
        type="text"
        placeholder="Add To Do"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
      />
      <button className="bg-[#99A7F1] px-[20px] py-[8px] font-semibold text-[#393D51] rounded-[8px]">
        Add
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default InputForm;
