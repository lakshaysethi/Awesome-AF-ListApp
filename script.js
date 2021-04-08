// ti = task input
const ti = document.getElementById('main-todo-input')
let taskList = []
class Task{
    constructor(name='no name task',done ) {
        this.name = name;
        this.done = false;
    }

}

ti.addEventListener('keyup',(ev)=>{
    if(ev.key == 'Enter'&& ti.value!=''){
        let task = ti.value
        addTaskToList(task)
        refreshTaskList()
        ti.value = 'enter new task'
        ti.select()
    }
})

const addTaskToList = (task)=>{
    taskList.push(task)
}

const refreshTaskList=()=>{
    document.createElement(`<div class="list-item">
    <input class='done' type="checkbox"><p>do abc</p>
</div>`)
}