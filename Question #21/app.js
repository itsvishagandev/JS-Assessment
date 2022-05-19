String.prototype.isContainsVowel = function() { 
    let vowels = /[aeiou]/gi;
    let result = this.match(vowels);
    if(result != null) {
        return true;
    }
    else {
        return false;
    }
};

let string = 'vishagan';
console.log(string.isContainsVowel());

/////////////////////////////////////////////////////

String.prototype.isContainsConsonant = function(n) {
    debugger
    let vowel = /[aeiou]/gi;
    let input = /[n]/gi
    let checkVowels = n.match(vowel);
    let checkConsonant = this.match(input);
    if(checkVowels != null) {
        alert(n + ' is an vowel.')
        return false;
    }
    else if(checkConsonant != null) {
        return true;
    }
    else {
        return false;
    }
}

console.log(string.isContainsConsonant('n'));
console.log(string.isContainsConsonant('a'));
