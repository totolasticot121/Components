
// Change navbar properties on scroll position
window.addEventListener('load', () => scrollFunction());
window.addEventListener('scroll', () => scrollFunction());


function scrollFunction() {

	if(document.querySelector('.trigger') !== null)
	{
		// Get the element position
		let trigger = document.querySelector('.trigger').offsetTop;
		trigger -= 70;
		
		if (document.body.scrollTop >= trigger || document.documentElement.scrollTop >= trigger)
		{
			lightNav();
		}else{
			blackNav();
		}
	}else{
		lightNav();
	}
}

function blackNav(){
	document.getElementById("nav").classList.remove("two", "shadow");
	document.getElementById("nav").classList.add("one");
	document.getElementById("siteIcon").src="/img/logo_DWWM.png";
	document.querySelectorAll(".toggle-btn").forEach((el) => {
		el.style.backgroundColor = "white";
	})
}

function lightNav(){
	document.getElementById("nav").classList.remove("one");
	document.getElementById("nav").classList.add("two", "shadow");
	document.getElementById("siteIcon").src="/img/blackLogo_DWWM.png";
	document.querySelectorAll(".toggle-btn").forEach((el) => {
		el.style.backgroundColor = "black";
	})	
}

// Blur toggle background on mobile nav
let $collapse = document.querySelector('.tg');
$collapse.addEventListener("click", () => {  document.querySelector('.homeHead').classList.toggle("blur"); });