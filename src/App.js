import React, { useState } from "react";
import Header from "./components/header";
import Task from "./components/task";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      text: "Do something at school",
      day: "Feburary 6th 2022",
      reminder: true,
    },
    {
      id: 2,
      text: "Do something at work",
      day: "Janurary 6th 2022",
      reminder: true,
    },
    {
      id: 3,
      text: "Do something at home",
      day: "December 20th, 2021",
      reminder: false,
    },
  ]);

  //Delete task
  const deleteTask = (id) => {
    setTask(task.filter((tsk) => tsk.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    task.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
  };
  return (
    <div className="container">
      <Header title={"Tracker"} />
      {task.length > 0 ? (
        <Task task={task} onDelete={deleteTask} onTogge={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
