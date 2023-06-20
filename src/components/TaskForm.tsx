/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: any) => {
    // console.log('event:', e.target.value, e.target.name);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Avoid to Page refresing
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    //After Dispath, just back to the original page
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
