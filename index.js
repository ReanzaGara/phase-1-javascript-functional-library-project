function myEach(collection, callback) {
    if(Array.isArray(collection)) {
        collection.forEach(callback)
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const newArray = [];

    if (Array.isArray(collection)) {
        for (let i=0; i < collection.length; i++) {
            newArray.push(callback(collection[i]));
        } 
    } else if (typeof collection === 'object') {
        const values = Object.values(collection);
        for (let j = 0; j < values.length; j++) {
            newArray.push(callback(values[j]));
        }
    }

    return newArray;
}

function myReduce(collection, callback, acc) {
    let startIdx = 0;
  
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        acc = collection[0];
        startIdx = 1;
      } else {
        const values = Object.values(collection);
        acc = values[0];
        startIdx = 1;
      }
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i]);
      }
    } else {
      const values = Object.values(collection);
      for (let j = startIdx; j < values.length; j++) {
        acc = callback(acc, values[j]);
      }
    }
  
    return acc;
}

function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            return collection[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
      const result = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
      return result;
    } else if (typeof collection === 'object') {
      const result = [];
      for (let key in collection) {
        if (predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
      return result;
    } else {
      throw new Error('Invalid collection type');
    }
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.keys(collection).length;
    }
}

function myFirst(array, n) {
    if (n) {
        return array.slice(0, n);
    } else {
        return [array[0]];
    }
}

function myLast(array, n) {
    if (n) {
        return array.slice(-n);
    } else {
        return [array[array.length - 1]];
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}