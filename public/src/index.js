let all_list_items ={} ;
all_list_items.array = []
let all_archived_items ={};
all_archived_items.array =[]
const myinput = document.getElementById('myinput')
const listholder = document.getElementById('items-holder')

if(localStorage.getItem('all_list_items')){
    all_list_items = JSON.parse (localStorage.getItem('all_list_items'))
    all_list_items.array.forEach(list_item => {
        addNewListItem_toDOM(list_item)
    });
    

}
if(localStorage.getItem('all_archived_items')){
    all_archived_items = JSON.parse (localStorage.getItem('all_archived_items'))
}

window.onbeforeunload = function(event) {
    localStorage.setItem('all_archived_items', JSON.stringify(all_archived_items)); 
    localStorage.setItem('all_list_items',JSON.stringify(all_list_items))

};
        


myinput.focus()


myinput.addEventListener('keypress',(e)=>{
    
    if(e.key == 'Enter'){
        if(myinput.value !== ''){
            all_list_items.array.push(myinput.value)
            addNewListItem_toDOM(all_list_items.array[all_list_items.array.length-1])
            myinput.value = ''
        }
    }
})




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
    if(showArchieveButton) newlistitem.appendChild(archive_icon)
    archive_icon.addEventListener('click',()=>{
        let item_to_archieve = all_list_items.array.pop(all_list_items.array.indexOf(text))
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
    
const show_archieve_button = document.getElementById('clear-list')
show_archieve_button.addEventListener('click',()=>{
    // if(confirm('are you sure you want to delete all items from the list?')){
    //     all_list_items.array = []
    //     localStorage.setItem("all_list_items", JSON.stringify(all_list_items)); 
    //     alert('done you can now reload the page to start a new list')
        
    // }   
    
    updateDOM(all_archived_items,false)
})










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


