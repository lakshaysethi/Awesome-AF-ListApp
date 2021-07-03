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
    writetoLocalStorage()
};
