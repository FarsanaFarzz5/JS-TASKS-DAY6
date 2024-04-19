function mostFrequentDate(dates) {
    const dateCounts = dates.reduce((acc, date) => {
        const dateString = date.toDateString();
        acc[dateString] = (acc[dateString] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(dateCounts).reduce((a, b) => dateCounts[a] > dateCounts[b] ? a : b);
}

const dates = [
    new Date('2024-04-01'),
    new Date('2024-04-02'),
    new Date('2024-04-02'),
    new Date('2024-04-03'),
    new Date('2024-04-03'),
    new Date('2024-04-03'),
    new Date('2024-04-04')
];

console.log(mostFrequentDate(dates));