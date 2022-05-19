function filterTheArray(arr,ele) {
    let result = arr.filter(function(obj){

        for(key in obj) {
          if(obj[key].includes(ele)) {
            return obj;
          }
        }
    });
    return result;
}


var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]

console.log(filterTheArray(animals,'dog'))