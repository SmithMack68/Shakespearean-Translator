


// const changeBackgroundImage = () => document.body.style.backgroundImage = "url('theglobe.png')"



//** Global Variables **//
let userInputTxt = document.querySelector('#inputTxt');
const translateButton = document.querySelector('#translateButton');
//let userOutputTxt = document.querySelector("")
const translateUrl = "https://shakespeare1.p.rapidapi.com/shakespeare/translate?text=%3CREQUIRED%3E";
const insultUrl = "https://shakespeare1.p.rapidapi.com/shakespeare/generate/insult";
const insultButton = document.querySelector('#shakesBtn');



//** Templates **/

//** Node Getters **/


//** Renderers **/





//** Code **/
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.collapsible');
//     var instances = M.Collapsible.init(elems, options);
//   });


function retrieveTranslation(inputValue){

    return translatedData
}

function handleTranslate(e){
    let inputValue = userInputTxt.value;
// let translated info = retrieveTranslation(inputValue)
    fetch()
}


translateButton.addEventListener('click', handleTranslate);
//** On DOMLOAD  **/

// fetch("https://shakespeare1.p.rapidapi.com/shakespeare/translate?text=%3CREQUIRED%3E", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "shakespeare1.p.rapidapi.com",
// 		"x-rapidapi-key": "f82e058679msh72322cf02d18b5fp16c24ajsn798ce02fdf81"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// fetch("https://shakespeare1.p.rapidapi.com/shakespeare/generate/insult", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "shakespeare1.p.rapidapi.com",
// 		"x-rapidapi-key": "f82e058679msh72322cf02d18b5fp16c24ajsn798ce02fdf81"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


//`${url}?text=${inputTxt}`