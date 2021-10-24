let date = new Date()
let count;

do{
    count = prompt('please enter the number of days');
} while(!(isFinite(count) && count))

let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let sum = (date.getDay() + +count) % 7;

let resultDate = new Date(date.setDate(date.getDate() + +count));
let newDate = resultDate.getDate() + '/' + (resultDate.getMonth() + 1) + '/' + resultDate.getFullYear();

if(sum < 0) {
    sum = dayList.length - Math.abs(sum);
    alert(`${count} days ago it was ${dayList[sum]} and the date on the calendar was ${newDate}`)
} else alert(`after ${count} days it will be ${dayList[sum]} and the date on the calendar will be ${newDate}`)

