const form = document.querySelector("#formData");

form.addEventListener("submit", (e) => {
  //code goes here
  e.preventDefault();
  let inputValue = document.getElementById('inputValue').value;
  let num = inputValue.toString().split('');
  let multiplier = 1;  

  for (var i = num.length - 1; i >= 0; i--) {
      num[i] *= multiplier;
      multiplier *= 10;
  }

  //get FinalResult
  let finalResult = '';
  num.forEach(function(ele){
    finalResult += ele + ' + ';
  })

  //display the result
  document.getElementById('data').textContent = finalResult.slice(0,-2);


});
