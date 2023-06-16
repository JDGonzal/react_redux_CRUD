import {useSelector} from 'react-redux';
import { AppStore } from '../redux';

function TaskList() {

  const tasksState = useSelector((state:AppStore) => state.tasks );
  console.log('TasksStateList:',tasksState);

  return (
    <div> List
    {tasksState.map(task =>(
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}  
    </div>
  )
}

export default TaskList;
