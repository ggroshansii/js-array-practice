// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number = function(array){
    let count = 1;
    let newArr = [];
    array.forEach((element) => {   
        newArr.push(`${count}: ${element}`);
        count++;
    });

    return newArr;
  }

// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = N => {
    return N === 0 || N === undefined ? [] : Array.from([...Array(N).keys()]);
}

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone) {
    return drone.length > lamps.length
        ? "o".repeat(lamps.length)
        : "o".repeat(drone.length) + "x".repeat(lamps.length - drone.length);
}

// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    return Math.floor((marks.reduce((accum, element) => {
        return accum + element
    })) / marks.length);
}

// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043


//Long solution
const reverse = arr => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr;
}