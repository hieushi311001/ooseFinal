//active side bar
const sidebar=document.querySelector('.sidebar')
const active=document.getElementById('active_side')
var dropdown = document.getElementsByClassName("span_manager");
active.addEventListener('click',(e)=>{
    sidebar.classList.toggle('active_menu')
   
    
})
//dropdown



var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


