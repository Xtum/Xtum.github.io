var NumberOfWords = 19
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://shrinkurl.org/ViAiMjRE" 
words[2] = "https://shrinkurl.org/RQDVOAl" 
words[3] = "https://shrinkurl.org/VvF5L" 
words[4] = "https://shrinkurl.org/KW7D" 
words[5] = "https://shrinkurl.org/dMIVL" 
words[6] = "https://shrinkurl.org/AoNy" 
words[7] = "https://shrinkurl.org/oJZqc" 
words[8] = "https://shrinkurl.org/FsEyRxY" 
words[9] = "https://shrinkurl.org/QZgB" 
words[10] = "https://shrinkurl.org/0q7Q2JK" 
words[11] = "https://shrinkurl.org/uAxEf" 
words[12] = "https://shrinkurl.org/denb" 
words[13] = "https://shrinkurl.org/gw3fb" 
words[14] = "https://shrinkurl.org/wHXwtI" 
words[15] = "https://shrinkurl.org/izuGP" 
words[16] = "https://shrinkurl.org/cA9PPR" 
words[17] = "https://shrinkurl.org/KV3xedM2" 
words[18] = "https://shrinkurl.org/BbeUozUo" 
words[19] = "https://shrinkurl.org/2uH15g" 

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}