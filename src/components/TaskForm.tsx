/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

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

  const handleSubmit =  (e:any) => {
    e.preventDefault(); // Avoid to Page refresing
    console.log(task);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title" type="text" placeholder="title" onChange={handleChange}
      />
      <textarea
        name="description" placeholder="description" onChange={handleChange}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
