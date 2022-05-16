const icons=document.querySelectorAll('.sidebar ul li i') 
const sidebar=document.querySelector('.sidebar')
const active=document.getElementById('active_side')
const search_button=document.getElementById('search_field')
const search_fill=document.getElementById('search_fill')
active.addEventListener('click',(e)=>{
    sidebar.classList.toggle('active_menu')
    
})
search_button.addEventListener('click',(e)=>{
    sidebar.classList.toggle('active_menu')
    search_fill.focus();
})
