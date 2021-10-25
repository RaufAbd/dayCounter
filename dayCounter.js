const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date()
let input;

do{
    input = prompt('please enter the number of days');
} while(!(isFinite(input) && input))

let num = Math.round(+input)
let result = (date.getDay() + num) % 7;
let newDate = new Date(date.setDate(date.getDate() + num));
let resultDate =  monthList[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear();

if(num == 0) alert(`It's ${dayList[result]} today and the date is ${resultDate}`);
else if(num < 0) {
  (result != 0 && result < 0) ? result = dayList.length + result : result;
    alert(`${Math.abs(input)} days ago it was ${dayList[result]} and the date was ${resultDate}`)
} else alert(`After ${input} days it will be ${dayList[result]} and the date will be ${resultDate}`)
