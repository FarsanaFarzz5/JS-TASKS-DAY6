function daysBetweenDates(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24; 
    const differenceMs = Math.abs(date2 - date1); 
    const differenceDays = Math.ceil(differenceMs / oneDay); // Convert milliseconds to days and round up
    return differenceDays;
}

const startDate = new Date("2024-01-01");
const endDate = new Date("2024-04-19");
const daysDifference = daysBetweenDates(startDate, endDate);
console.log("Number of days between the two dates:", daysDifference);
