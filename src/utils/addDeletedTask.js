const addDeletedTask = (id, tasks, deletedTasks) => {
  const deletedTask = tasks.find((item) => item.id === id);
  return [...deletedTasks, deletedTask];
};

export default addDeletedTask;
