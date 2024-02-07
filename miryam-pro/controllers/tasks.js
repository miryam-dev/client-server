// taskList = [{ taskId: 1, taskTypeId: 1, taskName: "דוח תלמידים", contactId: "1234", contactName: "moshe choen", done: false },
// { taskId: 2, taskTypeId: 2, taskName: "לא עודכן מלאי ", contactId: "2345", contactName: "chaim chen", done: false },
// ]
const Task=require('../models/tasks')
const TaskType=require('../models/taskType')


exports.showTaskTypeList =async(req, res) => {
   try
   {
      const taskType=await TaskType.find();
      res.json(taskType);
   }
   catch(error)
   {
      console.error('Failed to get taskType:', error);
      res.status(500).json({ message: 'Failed to get taskType' });
   }
  
}

exports.addTaskType = async(req, res) => {
   const taskType=await TaskType.create(req.body);
   res.json(taskType)
   
}

exports.showList =async(req, res) => {
   console.log("llll");
    try
    {
       const tasks=await Task.find();
       res.json(tasks);
    }
    catch(error)
    {
       console.error('Failed to get tasks:', error);
       res.status(500).json({ message: 'Failed to get tasks' });
    }
   
}
exports.addTasks = async(req, res) => {
    const task=await Task.create(req.body);
    res.json(task)
    
}
exports.deleteTask = async(req, res) => {

    const taskId=req.params.id;
    try
    {
       const deleteTask=await Task.findOneAndDelete({taskId:taskId})
       if(!deleteTask){
        return res.status(404).json({ message: 'Task not found' });
       }
       res.json({ message: 'Task deleted successfully' });
    }
    catch(error)
    {
        res.status(500).json({ message: 'Failed to delete task' });
    }
};
exports.updateTask = async(req, res) => {
   console.log("lkjhgfy");
   const{ taskId }=req.params;
   try
   {
      const updateTask=await Task.findOneAndUpdate({taskId:taskId},{done:true});
      console.log(taskId);
      if(!updateTask)
      {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(updateTask);
   }
   catch(error)
   {
    res.status(500).json({ message: 'Failed to update task' });
   }
}