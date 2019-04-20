
//todo list
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

//for loop
var todosLength = todos.length;
for (var i = 0; i < todos.length; i++) {
    todos.pop();
}

//counter from 0 till 9 which is 10 numbers to be counted 
var counterOne = 0;
while ( counterOne < 10){
    console.log(counterOne);
    counterOne++
}

//couner opposite from 9 to 0
var counterOpposite = 10;
while (counterOpposite > 0) {
    console.log(counterOpposite);
    counterOpposite--
}

//while loop
var counterOne = 10
while (counterOne > 0) {
    console.log(counterOne);
    counterOne--;
}

// do- while loop
var counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);
