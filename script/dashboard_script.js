const icons=document.querySelectorAll('.sidebar ul li i') 
const sidebar=document.querySelector('.sidebar')
const active=document.getElementById('active_side')
active.addEventListener('click',(e)=>{
    sidebar.classList.toggle('active_menu')
    
})