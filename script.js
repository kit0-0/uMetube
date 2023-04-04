var menuIcon=document.querySelector('.menu-icon')
var sidebar=document.querySelector('.sidebar')
var container=document.querySelector('.container')

menuIcon.onclick=()=>
{
    sidebar.classList.toggle('shrink')
    container.classList.toggle('large-container')
}



