function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

console.log(sumRange(4))
// sumRange(4)
// 4 = 1 no  
// 4 + 3
// 3 + 2
// 2 + 1
// 1

// 2
// 