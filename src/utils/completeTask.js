const completeTask = (id, tasks) => {
  const task = tasks.find((item) => item.id === id);
  return task.isDone = !task.isDone;
};

export default completeTask;
