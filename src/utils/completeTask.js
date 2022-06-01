const completeTask = (id, tasks) => {
  const task = tasks.find((item) => item.id === id);
  return !task.complete;
};

export default completeTask;
