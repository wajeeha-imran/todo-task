import TodoItem from "./TodoItem";

export default function TodoList({
  tasks,
  deleteTask,
  toggleTask,
}) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))
      )}
    </div>
  );
}