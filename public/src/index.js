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
    
show_archieve_button.addEventListener('click',()=>{
    updateDOM(all_archived_items,false)
    show_main_list_button.style.display = 'block'
    show_archieve_button.style.display = 'none'
   
})

show_main_list_button.addEventListener('click',()=>{
    updateDOM(all_list_items)
    show_main_list_button.style.display = 'none'
    show_archieve_button.style.display = 'block'
    
})

darkmodebtn.onclick = ()=>{

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    let dark_style = document.createElement('style')
    dark_style.innerHTML = 'input,.list-item{ background-color: grey;}'
    document.body.prepend(dark_style)
}
darkmodebtn.innerHTML = "apply dark MODE"

listholder.before(darkmodebtn)

