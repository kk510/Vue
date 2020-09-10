const nums = [10, 20, 111, 222, 333, 12, 33, 44]
const newArrs = []
    // for (let item of nums) {
    //     if (item < 100) {
    //         newArrs.push(item * 2)
    //     }
    // }
    // console.log(newArrs);

// //将newArrs里面所有的数字相加 
// let totalNums = 0
// for (let n of newArrs) {
//     totalNums += n;
// }
// console.log(totalNums);
let newNums = nums.filter(item => item < 100)
console.log(newNums);

let newMap = nums.map(item => item * 2)
console.log(newMap)

//对数组中所有内容进行汇总
let newReduce = nums.reduce((preValue, item) => preValue + item)
console.log(newReduce);

let total = nums.filter(item => item < 100).map(item => item * 2).reduce((value, item) => value + item)
console.log(total);