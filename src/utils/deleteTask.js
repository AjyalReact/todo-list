const deleteTask = (id, tasks) => {
  const newTasksList = tasks.filter((item) => item.id !== id);
  return newTasksList;
};

export default deleteTask;
