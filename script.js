let api = "19000098-8dd18a1ece18fe19d80a7b2ee"


function ccc(e) {
	if(e.code == "Enter"){
		
		let val = document.getElementById("Bar").value
		hi(val)
	}
}
function loaded() {
	fetch("https://pixabay.com/api/videos/?key=19000098-8dd18a1ece18fe19d80a7b2ee&video_type=all&per_page=5&editors_choice=true&safesearch=true")
	.then(function (data){
		return data.json()
	})
	.then(data =>{ 
		let con = document.getElementById("y")
		con.innerHTML= ""
    
		data.hits.forEach(x => {
	con.innerHTML += `<video width="640" height="360" controls><source src="`+x.videos.tiny.url+`"  type="video/mp4">Your browser does not support the video tag.</video>`
    })
		
	})
}
function hi(query) {
	fetch("https://pixabay.com/api/videos/?key=19000098-8dd18a1ece18fe19d80a7b2ee&q="+query+"&video_type=all&per_page=10&editors_choice=true&safesearch=true")
	.then(function (data){
		return data.json()

	})
	.then(data =>{ 
		let con = document.getElementById("y")
		con.innerHTML= ""
    
		data.hits.forEach(x => {
	con.innerHTML += `<video width="640" height="360" controls><source src="`+x.videos.tiny.url+`"  type="video/mp4">Your browser does not support the video tag.</video>`
    })
		
	})
}

function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode")
}