// Declare Variables
var input1, input2, button, output, inputVal1, inputVal2;

//Set Up Variables
input1 = document.getElementById('num_one');
input2 = document.getElementById('num_two');
button = document.getElementById('calculateBtn');
output = document.getElementById('answer');

/*	TO DO ITEMS
	1. Watch for click of button
	2. When click happens grab input1 and input2
	3. calculate the addition of input1 and input2
	4. dump added value to answer
*/
console.log('Button', button);
console.log('Input1', input1);
console.log('Input2', input2);
console.log('Answer', output);

button.onclick = function (){
	console.log('Button was clicked dumbass');
	var inputVal1 = input1.value;
	var inputVal2 = input2.value;
	output.innerHTML = parseFloat(inputVal1) + parseFloat(inputVal2);
}