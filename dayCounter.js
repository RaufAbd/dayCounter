let date = new Date()
let count;

do{
    count = prompt('please enter the number of days');
} while(!(isFinite(count) && count))

// let dayList = ['Bazar günü', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə']
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let sum = (date.getDay() + +count) % 7;

let resultDate = new Date(date.setDate(date.getDate() + +count));
let newDay = resultDate.getDate();
let newMonth = resultDate.getMonth() + 1;
let newYear = resultDate.getFullYear();

if(sum < 0) {
    sum = dayList.length - Math.abs(sum);
    alert(`${count} days ago it was ${dayList[sum]} and the date on the calendar was ${newDay}/${newMonth}/${newYear}`)
} else alert(`after ${count} days it will be ${dayList[sum]} and the date on the calendar will be ${newDay}/${newMonth}/${newYear}`)

