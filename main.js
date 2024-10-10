/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/

//Part 1
function to_fahrenheit() {
    //the Number makes it convert to a number instead of a string, so the code knows its a number and not words
    let celsius = Number(prompt("What is the temperature in celsius?"));
    let fahrenheit = (celsius * 9/5) + 32
    console.log(`${celsius} celsius is equal to ${fahrenheit} fahrenheit`);
}

//Part 2
function to_celsius() {
    let fahrenheit = Number(prompt("What is the temperature in fahrenheit?"));
    let celsius = (fahrenheit - 32) * 5/9
    console.log(`${fahrenheit} fahrenheit is equal to ${celsius} celsius`);
}

//Part 3
function roll_d10() {
    //the * 10) + 1) includes numbers 1-10 and not 0-10
    //Math.floor is rounded to a whole number
    let number_rolled_10 = Number(Math.floor(Math.random() * 10) + 1);
    console.log(`You rolled a ${number_rolled_10}`);
}

//Part 4
function roll_d6() {
    let number_rolled_6 = Number(Math.floor(Math.random() * 6) + 1);
    console.log(`You rolled a ${number_rolled_6}`);
}

//Part 5
function triangle_area() {
    //the +prompt is a shortcut for Number(prompt
    //you don't need the console statement after each value is given, it just might be nice
    let triangle_base = +prompt("What is the base of the triangle?");
    console.log(`The base of the triangle is ${triangle_base}`);
    let triangle_height = +prompt("What is the height of the triangle?");
    console.log(`The height of the triangle is ${triangle_height}`);
    let area = (triangle_base * triangle_height)/2
    console.log(`The area of the triangle is ${area}`);
}

//Other Practice

function user_pick_random_range() {
    let user_range = +prompt("What would you like the highest value to be for the random number generator?");
    let random_number_generated = +(Math.floor(Math.random() * user_range) + 1);
    console.log(`With ${user_range} as your highest value, your random number is ${random_number_generated}`);
}

function born_in() {
    let user_age = +prompt("How old are you?");
    let year_born = 2024 - user_age 
    console.log(`You were born in ${year_born}`);
}
