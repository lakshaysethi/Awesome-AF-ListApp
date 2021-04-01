// ti = task input
const ti = document.getElementById('main-todo-input')
class Task{
    constructor(name='no name task',done ) {
        this.name = name;
        this.done = false;
      }

}
ti.addEventListener('keyup',(ev)=>{
    if(ev.key == 'Enter'){
        let task = ti.value
        addTaskToList(task)
        ti.value = ''
    }
})

const addTaskToList = (task)=>{

}