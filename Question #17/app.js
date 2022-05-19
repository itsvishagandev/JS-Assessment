let text = "I'm a little tea pot";
let str = text.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
console.log(str);