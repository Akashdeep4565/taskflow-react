export default function TaskItem({ task, index, toggleTask, removeTask }) {
  return (
    <li
      style={{
        padding: "10px",
        marginBottom: "8px",
        borderRadius: "6px",
        background: "#f8fafc",
        display: "flex",
        justifyContent: "space-between",
        borderLeft: `6px solid ${
          task.priority === "High"
            ? "#dc2626"
            : task.priority === "Medium"
            ? "#ca8a04"
            : "#16a34a"
        }`,
      }}
    >
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          opacity: task.completed ? 0.6 : 1,
        }}
      >
        {task.text} ({task.priority})
        {task.dueDate && <div>📅 {task.dueDate}</div>}
      </span>

      <div>
        <button onClick={() => toggleTask(index)}>✔</button>
        <button onClick={() => removeTask(index)}>✖</button>
      </div>
    </li>
  );
}
