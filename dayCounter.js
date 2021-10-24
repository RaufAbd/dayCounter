let date = new Date()
let count;

do{
    count = prompt('please enter the number of days');
} while(!(isFinite(count) && count))

let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let sum = (date.getDay() + +count) % 7; 

if(sum < 0) {
    sum = dayList.length - Math.abs(sum);
    alert(`${count} days ago it was ${dayList[sum]}`)
} else alert(`after ${count} days it will be ${dayList[sum]}`)
