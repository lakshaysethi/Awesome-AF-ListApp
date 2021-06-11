
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
            let item_to_un_archieve = all_archived_items.array.pop(all_archived_items.array.indexOf(text))
            all_list_items.array.push(item_to_un_archieve)
            updateDOM(all_archived_items,false)
        })
        return listholder.prepend(newlistitem)
    }
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