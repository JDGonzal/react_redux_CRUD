import { useSelector, useDispatch } from "react-redux";
import { AppStore, deleteTask } from "../redux";
import { Link } from "react-router-dom";

function TaskList() {
  const tasksState = useSelector((state: AppStore) => state.tasks);
  const dispatch=useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h1>Tasks: {tasksState.length}</h1>
      {tasksState.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/update-task/${task.id}`}>Update</Link>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
