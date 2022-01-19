

//** Global Variables **//
let inputTxt = document.querySelector('#inputTxt');
let outputTxt = document.querySelector("#outputTxt");
const translateButton = document.querySelector('#translateButton');
const translateUrl = "https://shakespeare1.p.rapidapi.com/shakespeare/translate?text=%3CREQUIRED%3E";
const insultUrl = "https://shakespeare1.p.rapidapi.com/shakespeare/generate/insult";
const insultButton = document.querySelector('#shakesBtn');


document.addEventListener('DOMContentLoaded', ()=> {
    translateButton.addEventListener('click', handleTranslate)
})

//function getInsult(){
// fetch("https://shakespeare1.p.rapidapi.com/shakespeare/generate/insult", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "shakespeare1.p.rapidapi.com",
// 		"x-rapidapi-key": "f82e058679msh72322cf02d18b5fp16c24ajsn798ce02fdf81"
// 	}
// })
// .then(resp => resp.json(){
// 	console.log(response);
// })
// .then(json => {
   //// outputTxt.innerText = json.????
//})
// .catch(err => {
// 	console.error("Shakespeare is too busy to insult you, try again later!");
// });

//}


//When clicked retrieve insult from API
insultButton.addEventListener('click', (e)=> {
    console.log("Hi")
})


//** Code **/
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.collapsible');
//     var instances = M.Collapsible.init(elems, options);
//   });


function retrieveTranslation(inputValue){

    return translatedData
}

function handleTranslate(e){
    let inputValue = inputTxt.value;
// let translated info = retrieveTranslation(inputValue)
  fetch(`https://shakespeare1.p.rapidapi.com/shakespeare/translate?text=${inputValue}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "shakespeare1.p.rapidapi.com",
		"x-rapidapi-key": "f82e058679msh72322cf02d18b5fp16c24ajsn798ce02fdf81"
	}
})
.then(resp => resp.json())
.then(data => {
    debugger
    //outputTxt.innerText = data.contents
})
// .catch(err => {
// 	console.error(err);
// });  
}



// function initialize(){
//     handleTranslate()
// }
// initialize()



// `${url}?text=${inputTxt}`