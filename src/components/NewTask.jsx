import { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState('');
  const [correctTask, setCorrectTask] = useState(true);

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      setCorrectTask(false);
    } else {
      onAddTask(enteredTask);
      setCorrectTask(true);
      setEnteredTask('');
    }
  };

  return (
    <>
    <div className="flex item-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 mb-4 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 px-4 mb-4 hover:text-stone-950 rounded-md hover:bg-stone-200"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
    {!correctTask && <p className="mb-4 text-red-400">An empty task cannot be submitted.</p>}
    </>
  );
};

export default NewTask;
