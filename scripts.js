const btn= document.querySelector("#menu-btn");
const nav= document.querySelector("#primary-navigation");
const header=document.querySelector("header");

btn.addEventListener("click",function(){
	if(btn.getAttribute("aria-expanded")=="false"){
		btn.setAttribute("aria-expanded","true");
		nav.removeAttribute("hidden");
	}else{
		btn.setAttribute("aria-expanded","false");
		nav.setAttribute("hidden","");
	}
});

document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");