const express=require('express') 
const router=express.Router()
const {updateTask,deleteTask,addTasks,showList,showTaskTypeList,addTaskType}=require('../controllers/tasks')

router.get('/',showList);
router.post('/',addTasks)
router.delete('/:id',deleteTask)
router.put('/:taskId',updateTask)
router.get('/taskType',showTaskTypeList)
router.post('/taskType',addTaskType)

module.exports=router; 
