export function addUser(user){
    return {type:'ADD_USER' ,payLoad:user}
}
export function deleteUser(user){
    return {type:'DELETE_USER' ,payLoad:user}
}
export function updateName(user){
    return {type:'UPDATE_NAME' ,payLoad:user}
}
export function updateCount(cnt){
    return {type:'UPDATE_COUNT' ,payLoad:cnt}
}
export function addTask(task){
    return{type:'ADD_TASK',payLoad:task}
}
export function addType(type){
    return{type:'ADD_TYPE',payLoad:type}
}
export function removTask(taskId){
    return{type:'REMOVE_TASK',payLoad:taskId}
}
export function updateTask(taskId){
    return{type:'UPDATE_TASK',payLoad:taskId}
}
export function getTaskList(taskList){
    return{type:'GET_TASKLIST',payLoad:taskList}
}
