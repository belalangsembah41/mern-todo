import React, { useState, useEffect } from "react";
import { HiOutlineTrash } from "react-icons/hi2";

const Todo = ({ todo }) => {
  const [click, setClick] = useState(false);

  const handleComplete = () => {
    setClick(!click);
  };

  const handleDelete = async () => {
    await fetch("http://localhost:3000/api/todo/" + todo._id, {
      method: "DELETE",
    }).then((res) => res.json);
  };

  return (
    <div
      className={
        click == true
          ? "flex items-center justify-between w-[800px] bg-[#97b4a6] pr-2 py-2 mt-3 mx-auto rounded-lg"
          : "flex items-center justify-between w-[800px] bg-[#EEE7E7] pr-2 py-2 mt-3 mx-auto rounded-lg"
      }
    >
      <div className="flex text-[#444040] gap-5 items-center relative">
        <i
          className="bg-[#f5b5b5] absolute -top-[5] -translate-y-[5] h-[55px] rounded-lg w-[55px] flex items-center justify-center"
          onClick={handleDelete}
        >
          <HiOutlineTrash className="w-9 h-9 cursor-pointer " />
        </i>
        <h2
          className={
            click == true
              ? "text-xl ml-[75px] font-semibold line-through"
              : "text-xl ml-[75px] font-semibold"
          }
        >
          {todo.todo}
        </h2>
      </div>
      <div className="flex gap-3">
        <button
          className="bg-[#9DE385] px-5 py-2 rounded-lg font-[580] text-[#266511]"
          onClick={handleComplete}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Todo;
