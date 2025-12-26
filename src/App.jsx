import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

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
      <div style={{ margin: "15px 0" }}>
        <button onClick={() => setFilter("all")}>All</button>{" "}
        <button onClick={() => setFilter("active")}>Active</button>{" "}
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        removeTask={removeTask}
      />
    </div>
  );
}
