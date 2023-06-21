/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore, addTask, updateTask } from "../redux";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state: AppStore) => state.tasks);

  // It will execute the next time the component is redered.
  useEffect(() => {
    if (params.id) {
      if (params.id) {
        setTask(tasks.find((task) => task.id === params.id));
      }
    }
  }, [params.id, tasks]);

  const handleChange = (e: any) => {
    // console.log('event:', e.target.value, e.target.name);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Avoid to Page refresing
    if (params.id) {
      dispatch( updateTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    //After Dispath, just back to the original page
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-500 text-neutral-100 rounded-md max-w-sm p-4">
      <label htmlFor="title" className="block text-xs font-bold mb-1">Task:</label>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-700"
      />
      <label htmlFor="description" className="block text-xs font-bold mb-1 mt-3">Description:</label>
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-700"
      ></textarea>
      <button className="btn bg-green-800 hover:bg-green-600 text-xs rounded-md px-2 py-1">Save</button>
    </form>
  );
}

export default TaskForm;
