//** Global Variables **//
let inputTxt = document.querySelector('#inputTxt');
let outputTxt = document.querySelector("#outputTxt");
const translateButton = document.querySelector('#translateButton');
const translateUrl = "https://shakespeare1.p.rapidapi.com/shakespeare/translate?text=%3CREQUIRED%3E";
const insultUrl = "https://shakespeare1.p.rapidapi.com/shakespeare/generate/insult";
const insultButton = document.querySelector('#shakesBtn');


document.addEventListener('DOMContentLoaded', () => {
    translateButton.addEventListener('click', handleTranslate)
})

//When clicked retrieve insult from API
insultButton.addEventListener('click', (e)=> {
    console.log("Hi")
})

//function getInsult(){
    // fetch("https://shakespeare1.p.rapidapi.com/shakespeare/generate/insult", {
    // 	"method": "GET",
    // 	"headers": {
    // 		"x-rapidapi-host": "shakespeare1.p.rapidapi.com",
    // 		"x-rapidapi-key": "f82e058679msh72322cf02d18b5fp16c24ajsn798ce02fdf81"
    // 	}
    // })
    // .then(resp => resp.json())
    // .then(data => {
       //// outputTxt.innerText = json.????
    //})
    // .catch(() => alert("Shakespeare is too busy to insult you, try again later!");
    // });
    
    //}
    
function handleTranslate(e){
    let inputValue = inputTxt.value;
  fetch(`https://shakespeare1.p.rapidapi.com/shakespeare/translate?text=${inputValue}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "shakespeare1.p.rapidapi.com",
		"x-rapidapi-key": "f82e058679msh72322cf02d18b5fp16c24ajsn798ce02fdf81"
	}
})
.then(resp => resp.json())
.then(data => {
    //console.log(data.contents.translated)
    //debugger
    const outputValue = data.contents.translated
    outputTxt.value = outputValue
})
 .catch(() => alert("error message")) 
}
