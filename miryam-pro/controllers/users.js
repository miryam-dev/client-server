
const User=require('../models/users')

exports.addUser = async(req, res) => {
    console.log(req.body);
    const user=await User.create(req.body);
    res.json(user) 
}
exports.deleteUser = async(req, res) => {

    const id=req.params.id;
    try
    {
       const deleteUser=await User.findOneAndDelete({id:id})
       if(!deleteUser){
        return res.status(404).json({ message: 'User not found' });
       }
       res.json({ message: 'User deleted successfully' });
    }
    catch(error)
    {
        res.status(500).json({ message: 'Failed to delete User' });
    }
    
};

exports.showUser =async(req, res) => {
    try
    {
       const users=await User.find();
       res.json(users);
    }
    catch(error)
    {
       console.error('Failed to get users:', error);
       res.status(500).json({ message: 'Failed to get users' });
    }
   
}

// exports.updateTask = async(req, res) => {
//    const{ taskId }=req.params;
//    try
//    {
//       const updateTask=await Task.findOneAndUpdate({taskId:taskId},{done:true})
//       console.log(taskId);
//       if(!updateTask)
//       {
//         return res.status(404).json({ message: 'Task not found' });
//       }
//       res.json(updateTask);
//    }
//    catch(error)
//    {
//     res.status(500).json({ message: 'Failed to update task' });
//    }
// }


