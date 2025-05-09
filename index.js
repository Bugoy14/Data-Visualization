console.log("Hello World!");

const dateElement = document.getElementById('date');
console.log(dateElement);

// JS object representing the current date and time
let currentDate = new Date();
console.log(currentDate);

// span's content = currentDate
dateElement.innerHTML = currentDate;

let dateOptions = {year: 'numeric', month:'long', day:'numeric'};

dateElement.innerHTML = currentDate.toLocaleDateString('en-US',dateOptions);


const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'a062a675abmsh4e3af357406fdc9p14ad5ajsn8cf590a0ff98',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: '23424934'})
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// RAPID API CODE END

// fetch(url, options)
// .then(res=>res.json())
// .then(data=>{
// 	console.log(data);
// })

let myPost = {
	name: "Lee Sung Kyung",
	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
	volume: 31799,
	followers: 3895734
}

console.log(myPost);
console.log(myPost.name);
console.log(myPost.queryUrl);
console.log(myPost.volume);
console.log(myPost.followers);

// Array - list of elements
let graphData = [
	{name: "PorDeeReunion", queryUrl: "search?q=%22PorDeeReunion%22", volume: 67000},
	{name: "BGYO3rdAnniversary", queryUrl: "search?q=%BGYO3rdAnniversary%23", volume: 27400}
];

console.log(graphData);
console.log(graphData[1]);
console.log(graphData[1].name);

// add elements with the use of push
graphData.push(myPost);
console.log(graphData);


console.log(graphData.length);


for(let i=0; i < 2; i++){
	console.log(graphData[i]);
	console.log(graphData[i].name);
	console.log(graphData[i].queryUrl);
	console.log(graphData[i].volume);
}

let topics = graphData.map(object=>{
	console.log(object);
	console.log(object.name);
	return object.name;
})

console.log(topics);

let volumes = graphData.map(object=>{
	return object.volume;
})

console.log(volumes);

 const myChart = document.getElementById('myChart');

let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });