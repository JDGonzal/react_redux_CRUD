import { useSelector, useDispatch } from "react-redux";
import { AppStore, deleteTask } from "../redux";
import { Link } from "react-router-dom";

function TaskList() {
  const tasksState = useSelector((state: AppStore) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="">
      <h1 className="flex justify-between items-center py-4">
        Tasks: {tasksState.length}
      </h1>
      <div className="grid grid-cols-3 gap-3 ">
        {tasksState.map((task) => (
          <div
            key={task.id}
            className="bg-neutral-500 text-neutral-100 p-1 rounded-md"
          >
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <button onClick={() => handleDelete(task.id)} className="btn bg-red-800 hover:bg-red-600 text-xs rounded-md px-2 py-1">Delete</button>
                <Link to={`/update-task/${task.id}`} className="btn bg-blue-800 hover:bg-blue-600 text-xs rounded-md px-2 py-1">Update</Link>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
