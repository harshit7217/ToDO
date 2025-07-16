import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  const tasksElement = tasks.map((task, index) => (
    <li className="flex justify-between border w-90 h-auto" key={index}>
      {task} <button className="border-l  px-2 mx-2 cursor-pointer text-red-500" onClick={handleDelete}>Delete</button>
    </li>
  ));

  function handleDelete(index) {
    const newTasks = [...tasks]; // Clone the array
    newTasks.splice(index, 1); // Remove the task at the given index
    setTasks(newTasks);
    console.log("Task deleted");
  }

  function handleTasks(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    
    setTasks((prev) => [...new Set([...prev, formJson.task])]);

    form.reset();
  }
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <div className="h-auto shadow flex flex-col justify-center">
        <h1 className="text-[3rem] text-center">To-Do List</h1>
        <form action="" onSubmit={handleTasks}>
          <input className="border h-auto w-50 mx-4 my-4 rounded" type="text" name="task" placeholder="Add a task.." />
          <button className="bg-blue-700 border text-[1.2rem] mx-4 my-4 p-1 w-20 cursor-pointer" type="Submit">Add</button>
        </form>
        <div className="flex  p-4 ">
          <ul>{tasksElement}</ul>
        </div>
      </div>
    </main>
  );
}

export default App;
