//Refactor it to use the rest operator & an arrow function:

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)


//1)findMin
//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

const findMin = (...args) => Math.min(...args)



//2)mergeObjects
//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})


//3)doubleAndReturnArgs
//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]


//Slice and Dice!

/** 1) remove a random element in the items array
and return a new array without that item. */

//Had to look at solution

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

  /** 2) Return a new array with every item in array1 and array2. */

  //Did it my self
  
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }

/** 3) Return a new object with all the keys and values
from obj and a new key/value pair */

//Had to look at solution

const addKeyVal = (obj, key, val) => {

    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

}

/** 4) Return a new object with a key removed. */

//Had to look at solution.

const removeKey = (obj, key) => {    
    
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  
   
}

/** 5) Combine two objects and return a new object. */

//Did it my self
  
const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }


/** 6) Return a new object with a modified key and value. */

//Had to look at solution.

const update = (obj, key, val) => {

      
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
   
  }