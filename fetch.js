var input = document.querySelector('.usserinput');

var display = document.querySelector('.output');
 function fetchData(){
   var api =fetch("https://covid-193.p.rapidapi.com/statistics?country=India", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "561e8a55femsh8a84202b181b514p1d35bajsn1c4602051a2d"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
}
fetchData();
//get("https://covid-193.p.rapidapi.com/countries?search=china");