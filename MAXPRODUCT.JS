function maxProduct(arr) {
    arr.sort((a, b) => b - a);
    return arr[0] * arr[1];
}


const numbers = [2, 3, 1, 5,6];
console.log("Maximum product:", maxProduct(numbers));
