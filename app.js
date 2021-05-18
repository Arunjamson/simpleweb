
var images = ["images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];
var index = 0;


function next() {
	var slider = document.getElementById('slider');

	index++;
	if (index >= images.length) {
		index = 0;
	}
	slider.src = images[index];
}

setInterval(next, 3000);

function prev() {
	var slider = document.getElementById('slider');

	index--;
	if (index < 0) {
		index = images.length - 1;
	}
	slider.src = images[index];
}


const downloadLink = document.querySelector('.btn');

downloadLink.addEventListener("click", ()=>{
	document.querySelector(".links").classList.toggle("active");
});


const loading = document.getElementById("loader");

window.addEventListener("load", ()=>{
	loading.style.display = "none";
})

const modalBox = document.querySelector(".modal");
const closeModal = document.getElementById("closepop");
const subModal = document.getElementById("subpop");


function showingModal(){
	
	closepop.addEventListener("click", ()=>{
		modalBox.classList.remove("hide");
	})
    
    subModal.addEventListener("click", ()=>{
		modalBox.classList.remove("hide");
	})

    setTimeout(function(){
     modalBox.classList.add("hide");
	}, 5000);
}

showingModal()


const menuBtn = document.querySelector(".bar");
const navbar = document.querySelector(".navbar");

let menuopen = false;
let magicshow = false;

menuBtn.addEventListener("click", ()=>{
	if (!menuopen) {
    menuBtn.classList.add("open");
    menuopen = true;
	}
	else{
		menuBtn.classList.remove("open");
		menuopen = false;
	}
    



    if (!magicshow) {
    	
	navbar.classList.add("magic");
    magicshow = true;
    }
    else{
    	navbar.classList.remove("magic");
        magicshow = false;
    }
})




