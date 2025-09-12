const btn= document.querySelector("#menu-btn");
const nav= document.querySelector("#primary-navigation");

btn.addEventListener("click",function(){
	console.log("me clickeaste");
	if(btn.getAttribute("aria-expanded")=="false"){
		btn.setAttribute("aria-expanded","true");
		nav.removeAttribute("hidden");
	}else{
		btn.setAttribute("aria-expanded","false");
		nav.setAttribute("hidden","");
	}
});