const express=require('express') 
const router=express.Router()
const {addUser,showUser,deleteUser}=require('../controllers/users')

router.post('/',addUser)
router.get('/',showUser)
router.delete('/:id',deleteUser)
module.exports=router;
