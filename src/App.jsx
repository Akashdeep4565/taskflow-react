import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterButtons from "./components/FilterButtons.jsx";


export default function App() {
  // Load from LocalStorage
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  // Filter state
  const [filter, setFilter] = useState("all");

  // Save to LocalStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // 🔹 Derived state (IMPORTANT)
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // all
  });

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "500px" }}>
      <h1>TaskFlow (React)</h1>

      <TaskForm addTask={addTask} />

      {/* Filter Buttons */}
     <FilterButtons filter={filter} setFilter={setFilter} />


      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        removeTask={removeTask}
      />
    </div>
  );
}
