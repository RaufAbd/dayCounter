let date = new Date()

let count = +prompt('please enter the number of days');
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let sum = (date.getDay() + count) % 7; 

alert(`after ${count} days it will be ${dayList[sum]}`)
