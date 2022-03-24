let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let list = document.querySelectorAll('.navigation li');
toggle.onclick = function(){
	navigation.classList.toggle('active');
	main.classList.toggle('active');
}

function activeLink(){
	list.forEach((item) =>{
		item.classList.remove('hovered');
		this.classList.add('hovered');
	});
}
list.forEach((item)=>{
	item.addEventListener('mouseover',activeLink);
})