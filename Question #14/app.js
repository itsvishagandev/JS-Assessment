// Sort Numbers
function orderedNumber(ele) {
    ele.sort(function(a, b) {
        return a - b;
    });
    return ele
}

//sort Alphbets
function orderedAlphbet(ele) {
    ele.sort(function(a, b) { 
        return a.localeCompare(b);
    });
    return ele;
}

var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];
console.log(orderedNumber(numbers));

var p = ['a','z','e','y'];
console.log(orderedAlphbet(p));