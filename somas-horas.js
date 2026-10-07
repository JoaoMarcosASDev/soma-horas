const [, , ...args] = process.argv;

const hoursToMinutes = (hour) => hour * HOUR_IN_MINUTS;

const minHourArr = args.map(i => i.split(':'));

const hoursNumArr = minHourArr.map(i => Number(i[0]));
const minsNumArr = minHourArr.map(i => Number(i[1]) || 0);
const len = hoursNumArr.length;

let acumHours = hoursNumArr[0];
let acumMin = minsNumArr[0];

const HOUR_IN_MINUTS = 60

for (let i = 1; i < len; i++) {
    acumMin += minsNumArr[i];
    if (acumMin >= HOUR_IN_MINUTS) {
        acumHours++;
        acumMin = Math.abs(HOUR_IN_MINUTS - acumMin);
    }

    acumHours += hoursNumArr[i];
}

console.log('Horas declaradas:', '\n------------------');

for (let i = 0; i < len; i++) {
    console.log(`${hoursNumArr[i]}:${minsNumArr[i] || '00'}`)
}

console.log();

console.log(`Total: ${acumHours}:${acumMin}`);
//console.log(acumMin);

// let acumHoursToMinutes = 0 // // const totalHours = minHourArr.map(i => Number(i[0]))
//     .reduce((prevValue, curValue) => prevValue + curValue);
// 
// const hoursToMin = hoursToMinutes(totalHours);
// console.log(hoursToMin);
