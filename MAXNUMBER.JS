function thirdMax(nums) {
    const uniqueNums = [...new Set(nums)];
    const sortedUniqueNums = uniqueNums.sort((a, b) => b - a);
    return sortedUniqueNums.length >= 3 ? sortedUniqueNums[2] : sortedUniqueNums[0];
}

// Example usage:
const array = [3, 1, 5, 2, 5, 4];
console.log("Third maximum number:", thirdMax(array));
