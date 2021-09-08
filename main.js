// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function repeat(str, i) { 
    return Array(i).fill(str);
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverseArr(arr) {
    return arr.slice().reverse();
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function removeFalsy(arr) {
    return arr.filter((element) => ![null, undefined, 0, false, NaN, ""].includes(element));
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
//const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function arrToObj(arr) {
    let obj = {};
    arr.forEach((elem) => obj[elem[0]] = elem[1])
    return obj;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

function findUniqueVals(arr) {
    return [...new Set(arr)];
}

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

function arrEquality(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i=0;i<arr1.length;i++){
            if (!arr2.includes(arr1[i])){
                return false;
            }
        }
        return true;
    }
}


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

function combineSubArrs(arr) {
    return arr.reduce((accum, elem) => {
        return accum.concat(elem);
    }, []);
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------


function arrSplit(arr, i){
    let newArr = [];
    let fullDivision = Math.floor(arr.length / i);
    for (let j = 0; j < fullDivision; j++) {
        newArr.push(arr.slice(0, i));
    }
    console.log(newArr[newArr.length-1[]];
    newArr.push(arr.slice(newArr.length -1))
    return newArr;
}

 
console.log(arrSplit([1,2,3,4,5], 3))




// -----------------------------------------------