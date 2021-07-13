
function addNewListItem_toDOM(text,showArchieveButton=true){
    let newlistitem = document.createElement('div')
    newlistitem.classList.add ( 'list-item','noselect')
    newlistitem.addEventListener ('click',()=>newlistitem.classList.toggle('checked'))
    newlistitem.innerText=text
    archive_icon = document.createElement('div')
    archive_icon.className = "archive_icon"
    archive_icon_img = document.createElement('img')
    archive_icon_img.src  = 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_archive_48px-512.png'
    archive_icon_img.className = 'archive_icon_img'
    archive_icon.appendChild(archive_icon_img)
    if(showArchieveButton) {
        newlistitem.appendChild(archive_icon)
    }else{
        let unarchive_icon = archive_icon
        unarchive_icon.classList.add('upside-down')
        newlistitem.appendChild(unarchive_icon)
        unarchive_icon.addEventListener('click',()=>{
            let item_to_un_archieve = all_archived_items.array.splice(all_archived_items.array.indexOf(text),1)
            all_list_items.array.push(item_to_un_archieve)
            updateDOM(all_archived_items,false)
        })
        return listholder.prepend(newlistitem)
    }
    archive_icon.addEventListener('click',()=>{
        
        let item_to_archieve = all_list_items.array.splice(all_list_items.array.indexOf(text),1)
        all_archived_items.array.push(item_to_archieve)
        updateDOM(all_list_items)
    })
    
    
    
    listholder.prepend(newlistitem)
}

function updateDOM(items,showArchieveButton = true){
    // TODO chaneg later : copy paste code
    listholder.innerHTML =''
    items.array.forEach(list_item => {
        addNewListItem_toDOM(list_item,showArchieveButton)
    });
   
   
        
}




function registerServiceworker(){
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
          console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function(error) {
          console.log('Service worker registration failed, error:', error);
        });
      }
}



function writetoLocalStorage(){

    localStorage.setItem('all_archived_items', JSON.stringify(all_archived_items)); 
    localStorage.setItem('all_list_items',JSON.stringify(all_list_items))

}



function add_task_on_server(name){
    var formdata = new FormData();
    formdata.append("name", name);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
        mode: 'no-cors',

    };

    fetch("http://127.0.0.1:8000/add", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}




function update_task_on_server(task_id,arch,done){
    
    var formdata = new FormData();
    formdata.append("archieved", arch);
    formdata.append("done", done);
    formdata.append("task_id", task_id);

    var requestOptions = {
        method: 'POST',
        // headers: myHeaders,
        body: formdata,
        redirect: 'follow',
        mode: 'no-cors',

    };

    fetch(`${server}/update`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function get_tasks_from_server(){
    
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'no-cors',
       

      };
      
      fetch("http://127.0.0.1:8000/get-list", requestOptions)
        .then(response => console.log(response.text()))
        .then(result => {console.log('result',result); addServerTasksToMyList(result);    })
        .catch(error => console.log('error', error));

       


    }


function addServerTasksToMyList(task_list_str){
    console.log('str',task_list_str)
    task_list_obj = JSON.parse(task_list_str)
    array = task_list_obj.task_list
    console.log(array)
    // all_list_items.array += array
}

