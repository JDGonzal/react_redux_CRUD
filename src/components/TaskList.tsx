import { useSelector, useDispatch } from "react-redux";
import { AppStore, deleteTask } from "../redux";

function TaskList() {
  const tasksState = useSelector((state: AppStore) => state.tasks);
  const dispatch=useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {" "}
      List
      {tasksState.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
