import TaskBox from "./TaskBox";

const Task = ({ task, onDelete, onTogge }) => {
  return (
    <div>
      {task.map((obj) => {
        return (
          <TaskBox
            key={obj.id}
            task={obj}
            deleteTask={onDelete}
            onToggle={onTogge}
          />
        );
      })}
    </div>
  );
};

export default Task;
