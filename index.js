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

