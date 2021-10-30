//given the following

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//         return num % 2 === 0
//     });
// }

//refactor to use rest operator and arrow functions

const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

//findMin: should accept variable number of arguments, should return smallest argument

const findMin = (...nums) => nums.reduce((acc, nextNum) => Math.min(acc, nextNum))

//mergeObjects should accept two objects and return an object with all key/values of both objects passed

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArgs should accept an array and a variable number of other arguments, should return a new array with the values of the original array, then with the additional values doubled

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];

//Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */
const arr = [1,2,3,4,5,6];
function removeRandom (items) {
    const copyArr = [...items];
    copyArr.splice(Math.floor(Math.random()*arr.length), 1);
    return copyArr;
}

/** Return a new array with every item in array1 and array2. */
const another = [7,8,9];
const extend = (arr1, arr2) => [...arr1, ...arr2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const lobj = {
    wow : 'such',
    an: 'object',
    never: 'seen',
    one:'like it'
}
const addKeyVal = (obj, key, val) => ({...obj, [key]:val});

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let resultObj = {};
    resultObj = {...obj};
    delete resultObj[key];
    return resultObj;
}

/** Combine two objects and return a new object. */
const anotherObj = {
    hey: 'cool'
};
const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key]: val});