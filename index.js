	const box =  document.querySelector(".box");
	const colors = ["red", "green", "blue", "orange", "purple", "pink", "skyblue"]

	let random;
	const fillBox = ()=>{

		for(let i = 0; i < (7*7) ; i++){
			random  = Math.ceil(Math.random() * colors.length -1)
			console.log(random)
			box.innerHTML += `<div class='caja' style='background:${colors[random]}'></div>`
		}
	}
	fillBox()
	console.log("a")