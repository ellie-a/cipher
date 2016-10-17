
var yourWord = prompt("Enter a sentence.");
var result = yourWord.charAt(0) + yourWord.charAt(yourWord.length-1);

var combinedResult = result.toUpperCase().split('').reverse('').join('');

alert(combinedResult + yourWord);
