export default function TaskItem({ task, index, toggleTask, removeTask }) {
  return (
    <li className={task.priority.toLowerCase()}>
      <span className={task.completed ? "completed" : ""}>
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
