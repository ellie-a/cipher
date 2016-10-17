
var yourWord = prompt("Enter a sentence.");
var result = yourWord.charAt(0) + yourWord.charAt(yourWord.length-1);

var combinedResult = result.toUpperCase().split('').reverse('').join('');
var letterCount = yourWord.length;
var half = (letterCount / 2)
var midLetter = yourWord.charAt(half);

var modifyReverse = midLetter + yourWord + combinedResult
var finalOutput = modifyReverse.split('').reverse('').join('');

alert(finalOutput);
