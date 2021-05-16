const myinput = document.getElementById('myinput')

myinput.focus()


myinput.addEventListener('keypress',(e)=>{
    console.log(myinput.value !== '')
    if(e.key == 'Enter'){
        if(myinput.value !== ''){
            addNewListItem(myinput.value)
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
    listholder.appendChild(newlistitem)
}