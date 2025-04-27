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






// Hero img next action

const goFront = document.getElementById("goFront")
const goBack = document.getElementById("goBack")

const hero1 = document.getElementById("hero1")
const hero2 = document.getElementById("hero2")


let changeNow = true;

function showHero1() {
  hero1.classList.remove("hidden");
  hero2.classList.add("hidden");
  changeNow = true;
}

function showHero2() {
  hero1.classList.add("hidden");
  hero2.classList.remove("hidden");
  changeNow = false;
}

goFront.addEventListener("click", () => {
  changeNow ? showHero2() : showHero1();
});

goBack.addEventListener("click", () => {
  changeNow ? showHero2() : showHero1();
});



