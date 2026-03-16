import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    try {
      if (!title) return;

      await axios.post("http://localhost:5000/api/tasks", {
        title,
        description,
      });

      setMessage("Task added successfully!");
      setTimeout(() => setMessage(""), 2000);

      setTitle("");
      setDescription("");

      fetchTasks();
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  const completeTask = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error completing task", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.status === "Completed";
    if (filter === "Pending") return task.status !== "Completed";
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-16">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Task Manager
        </h1>

        {/* Add Task Form */}
        <div className="space-y-3 mb-6">

          <input
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />

          <input
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />

          <button
            type="button"
            disabled={!title}
            onClick={addTask}
            className={`w-full py-2 rounded-lg text-white ${
              title
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add Task
          </button>

          {message && (
            <p className="text-green-600 text-center">{message}</p>
          )}

        </div>

        {/* Task Counter */}
        <h2 className="text-lg font-semibold mb-3">
          Your Tasks {tasks.length > 0 && `(${tasks.length})`}
        </h2>

        {/* Filters */}
        <div className="flex gap-2 mb-4">
          {["All", "Pending", "Completed"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded ${
                filter === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-3">

          {filteredTasks.length === 0 && (
            <p className="text-center text-gray-400 italic">
              No tasks found.
            </p>
          )}

          {filteredTasks.map((task) => (
            <div
              key={task._id}
              className="border rounded-lg p-4 flex justify-between items-center"
            >

              <div>
                <h3
                  className={`font-semibold ${
                    task.status === "Completed"
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {task.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {task.description}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {new Date(task.createdDate).toLocaleString()}
                </p>

                <span
                  className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {task.status}
                </span>

              </div>

              <div className="flex gap-2">

                {task.status !== "Completed" && (
                  <button
                    onClick={() => completeTask(task._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Complete
                  </button>
                )}

                <button
                  onClick={() => deleteTask(task._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;
