let fruits = ['apple' , 'mango' , 'banana' , 'orange' , 'grapes' , 'blackberry' , 'blueberry' , 'kiwi' , 'watermelon' , 'melon' ]


fruits.push('kaila')
fruits.pop()
fruits.unshift('kaila')
fruits.shift()
// console.log(fruits);

// let eaten = fruits.slice(3 , 6)
// console.log(eaten);


fruits.splice(3 , 6 , 'ktm' )
console.log(fruits);







// array has six function
// 1.push
// 2.pop
// 3.unshift
// 4.shift
// 5.slice
// 6.splice


// next topic
// 1.split
// 2.concat
// 3.reverse
// 4.sort
// 5.join
// 6.indexof

let names = " my name is hamza memon And my age is 20"
const newArr = names.split()
console.log(newArr)

// let newStr = newArr.join(" ")
// console.log(newStr);


let array1 = [1,2,3,4]
let array2 = [5,6,7,8]
let add = array1.concat(array2)
console.log(add); 

let arr = ["b" , "d" , "f" , "a"]
arr.sort()
console.log(arr);