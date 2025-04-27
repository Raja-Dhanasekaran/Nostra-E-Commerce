// Offer actions
const offerX = document.getElementById("offerX");
const offer = document.getElementById("offer");

offerX.addEventListener("click", function(){
    offer.style.display= "none"
})



const menuBar=document.getElementById("menuBar")
const sideNavClose=document.getElementById("sideNavClose")
const sideNav=document.getElementById("sideNav")

menuBar.addEventListener("click", ()=>{
    sideNav.style.left=0
})

sideNavClose.addEventListener("click", ()=>{

  sideNav.style.left="-100%"

})


