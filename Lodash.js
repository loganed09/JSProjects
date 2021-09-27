const _ = {
  clamp(target, lower, upper) {
    let lowerClampedValue = Math.max(target, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(target, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;      
    }else if (start > end) {
      temp = start;
      start = end;
      end = temp;
    }
    return (target >= start && target < end) ? true : false;
  },

  words(str) {
    let words = str.split(' ');
    return words;
  },

  pad(str, len) {
    if(str.length >= len) {
      return str;
    }
    let startPad = Math.floor((len-str.length)/2);
    let endPad = len - str.length - startPad;
    let paddedString = ' '.repeat(startPad) + str + ' '.repeat(endPad);
    return paddedString;  
  },

  has(obj, key) {
    let hasValue = obj.hasOwnProperty(key);
    return hasValue;
  },

  invert(obj) {
    let invertedObject = {};
    for (let key in obj){
      let originalValue = obj[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },

  findKey(obj, predicate) {
    for (let key in obj) {
      let value = obj[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },

  drop(arr, num) {
    if (num === undefined) {
      num = 1;
    };
    let newArr = arr.slice(num);
    return newArr;
  },

  dropWhile(arr, predicate) {
    let dropNumber = arr.findIndex((element, index) => {
      return !predicate(element, index, arr);
    });
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },

  chunk(arr, size) {
    if (size === undefined) {
      size = 1;
    }
    let chunks = [];
    for (let i =0; i<arr.length; i=i+size) { 
      let arrayChunk = arr.slice(i, i+size);
      chunks.push(arrayChunk);
    }
    return chunks
  }

}



module.exports = _;
