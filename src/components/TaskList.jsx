import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask, removeTask }) {
  if (tasks.length === 0) {
    return <p style={{ opacity: 0.6 }}>📝 No tasks yet. Add your first task!</p>;
  }

  return (
    <ul style={{ padding: 0 }}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}
