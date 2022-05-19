var items = ['milk', 'bread', 'sugar'];

function checkArrayHasItem(ele) {
    var elementStatus = items.includes(ele);
    if(elementStatus == true) {
        alert('Array has the element ' + ele);
    }
    else {
        alert(`Array does't have the element ` + ele);
    }
    return elementStatus;
}

console.log(checkArrayHasItem('milk'));


