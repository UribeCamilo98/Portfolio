const btn= document.querySelector("#menu-btn");
const nav= document.querySelector("#primary-navigation");
const header=document.querySelector("header");
const links= document.querySelectorAll('#primary-navigation a');

btn.addEventListener("click",function(){
	if(btn.getAttribute("aria-expanded")=="false"){
		btn.setAttribute("aria-expanded","true");
		nav.removeAttribute("hidden");
	}else{
		btn.setAttribute("aria-expanded","false");
		nav.setAttribute("hidden","");
	}
});

links.forEach((link)=>{
	link.addEventListener("click", () => {
		btn.setAttribute("aria-expanded","false");
		nav.setAttribute("hidden","");
	});
});

document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");
document.documentElement.style.setProperty("--menu-count", links.length);