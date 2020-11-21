function Task(props) {
    return (
      <div className="TaskContainer">
        <div className="TaskTitle">{props.title}</div>
        <div className="TaskToggleButton"></div>
      </div>
    );
  }
  
  export default Task;