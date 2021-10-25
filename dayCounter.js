let date = new Date()
let count;

do{
    count = prompt('please enter the number of days');
} while(!(isFinite(count) && count))

let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let sum = (date.getDay() + +count) % 7;

let resultDate = new Date(date.setDate(date.getDate() + +count));
let newDate =  resultDate.getDate() + " / " + monthList[resultDate.getMonth()] + " / " + resultDate.getFullYear();

if(sum < 0) {
    sum = dayList.length + sum;
    alert(`${Math.abs(count)} days ago it was ${dayList[sum]} and the date on the calendar was ${newDate}`)
    } 
else alert(`after ${count} days it will be ${dayList[sum]} and the date on the calendar will be ${newDate}`)

