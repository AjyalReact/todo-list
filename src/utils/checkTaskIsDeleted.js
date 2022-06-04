const checkTaskIsDeleted = (task, deletedTasks) => {
  const taskExist = deletedTasks.find((t) => t.name === task.name);
  if (taskExist) {
    return false;
  }
  return true;
};

export default checkTaskIsDeleted;
