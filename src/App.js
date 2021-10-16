import React, { useState } from "react";
import Header from "./components/header";
import Task from "./components/task";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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

  //Add task
  const addTask = (tasks) => {
    const id = Math.floor(Math.random() * 10000);
    const newTask = { id, ...tasks };
    setTask([...task, newTask]);
    setShowAddTask(false);
  };

  //Delete task
  const deleteTask = (id) => {
    setTask(task.filter((tsk) => tsk.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const printSum = () => {
    console.log("message");
  };
  return (
    <div className="container">
      <Header
        title={"Tracker"}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {task.length > 0 ? (
        <Task task={task} onDelete={deleteTask} onTogge={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
