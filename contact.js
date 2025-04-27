

const menuBar=document.getElementById("menuBar")
const sideNavClose=document.getElementById("sideNavClose")
const sideNav=document.getElementById("sideNav")

menuBar.addEventListener("click", ()=>{
    sideNav.style.left=0
})

sideNavClose.addEventListener("click", ()=>{

  sideNav.style.left="-100%"

})


