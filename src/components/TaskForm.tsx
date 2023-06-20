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
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
