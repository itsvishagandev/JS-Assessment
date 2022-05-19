function getUniqueValues(arrOfNum) {
    let unique = arrOfNum.filter((item, i, ar) => ar.indexOf(item) === i);
    return unique;
};

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log(getUniqueValues(arrOfNum))