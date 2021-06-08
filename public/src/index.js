/******************************************copied code */
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}
Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
/***************************************** copied code end */

let all_list_items_array =[]


const myinput = document.getElementById('myinput')

myinput.focus()


myinput.addEventListener('keypress',(e)=>{
    console.log(myinput.value !== '')
    if(e.key == 'Enter'){
        if(myinput.value !== ''){
            addNewListItem(myinput.value)
            all_list_items_array.push(myinput.value)
            localStorage.setObject("all_list_items", all_list_items_array); 
            myinput.value = ''
        }
    }
})



const listholder = document.getElementById('items-holder')
function addNewListItem(text){
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
    newlistitem.appendChild(archive_icon)
    listholder.appendChild(newlistitem)
    archive_icon.addEventListener('click',()=>{
        
    })
    listholder.prepend(newlistitem)
}





const clearlistbtn = document.getElementById('clear-list')
clearlistbtn.addEventListener('click',()=>{
    if(confirm('are you sure you want to delete all items from the list?')){
        all_list_items_array = []
        localStorage.setObject("all_list_items", all_list_items_array); 
        alert('done you can now reload the page to start a new list')
        
    }    
})






/****************************************** local storage*/
//set things from local storage 
if(localStorage.getObject("all_list_items")){
    all_list_items_array=localStorage.getObject("all_list_items");
    all_list_items_array.forEach(list_item => {
        addNewListItem(list_item)
    });
}


window.onbeforeunload = function(event) {
    localStorage.setObject("all_list_items", all_list_items_array); 
};
/******************************************local storage end */




const darkmodebtn = document.createElement('button')

darkmodebtn.onclick = ()=>{

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    let dark_style = document.createElement('style')
    dark_style.innerHTML = 'input,.list-item{ background-color: grey;}'
    document.body.prepend(dark_style)
}

listholder.before(darkmodebtn)

darkmodebtn.innerHTML = "apply dark MODE"


