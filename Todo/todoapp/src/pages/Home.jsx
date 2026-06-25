import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import FilterButtons from "../components/FilterButtons";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <TodoForm addTask={addTask} />

      <FilterButtons
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}