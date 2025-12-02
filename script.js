//your JS code here. If required.
const panel = document.querySelectorAll(".panel");
panel.forEach((img)=>{
	img.addEventListener("click",()=>{
		removeElement();
		img.classList.add("active");
	})
})

function removeElement() {
   panel.forEach((e)=>{
	   e.classList.remove("active");
   })	
}


