let dates = [];
const startMonth = 8;
const startDay = 26;
const monthEnd = 31;
let day;
let month = startMonth;
let nextMonth = false;

for( i = 0; i < 35; i++) {
  day = (i + startDay)%(monthEnd+1)
  if(i !== 0 && day === 0) {
    i++;
    day++;
  }

  if(!nextMonth) {
    if(day < startDay) {
      nextMonth = true;
      month = startMonth + 1;
    }
  }

  console.log(month + '/' + day);
  dates.push(`${month}/${day}`)
}

console.log(dates);

let d = new Date();
console.log(d.getDate());
