// Function to Check Task if Exist or not

const checkTasks = (task, tasks) => {
  const taskExist = tasks.find(t => t.name === task.name);
  if (taskExist) {
    return true;
  }
  return false;
}

export default checkTasks;