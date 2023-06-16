/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from '@/redux';
import { v4 as uuid } from 'uuid';

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

  const dispatch=useDispatch();

  const handleSubmit =  (e:any) => {
    e.preventDefault(); // Avoid to Page refresing
    dispatch(addTask({
      ...task,
      id: uuid(),
    }));
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
