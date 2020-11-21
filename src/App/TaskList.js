import Task from './Task'

function TaskList() {
    return (
      <div className="TaskListContainer">
        <div className="TaskListTitle">Title</div>
        <div className="TaskList">
            <Task title="Task Title"></Task>

        </div>
        <div className="AddTask">Add Task</div>
      </div>
    );
  }
  
  export default TaskList;