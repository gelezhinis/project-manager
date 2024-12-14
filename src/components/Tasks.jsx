import NewTask from "./NewTask";

const Tasks = ({ onAddTask, onDeleteTask, tasks }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id} className="w-64 flex justify-between">
                <span>{task.text}</span>{" "}
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-stone-700 px-4 hover:text-stone-950 rounded-md hover:bg-stone-200"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
