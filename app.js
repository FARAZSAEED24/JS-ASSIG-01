// chapter-01 
// alert("Error! Please enter a valid password");
// alert("welcome to JS land....\n Happy Coding!");
// alert("welcome to JS land....");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.")
// alert("Hello...I can run JS through my web browser")
// chapter-02
// var name = "faraz saeed"
// alert (name)
// var myname = "M.Faraz Saeed"
// console.log(myname);
// var message = "Hello WORLD"
// alert(message)
// var name =prompt("your name"); 
// var age =prompt("your age");
// var mob  =prompt("Certified Mobile Application Development");
// var userinput =name+age+mob
// alert(userinput)
// const a = "pizza";
// // alert(a.slice(0,5)+"\n"+a.slice(0,4)+"\n"+a.slice(0,3)+"\n"+a.slice(0,2)+"\n"+a.slice(0,1))
// var email = prompt("your email address")
// alert(email)
// const book = "A Smarter Way To Learn JavaScript"
// alert (( "I Am Trying To Learn From The Book" ) + book)
// document.write("<h3>Yah! I Can Write HTML Content Through JavaScript</h3>");
// var a = ("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")
// document.write("<h3>“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”</h3>")
// alert(a)
// chap-3
// var age = prompt("your age")
// alert('your age is '+ age )
// var usera =+prompt("");
// var userb =+prompt("");
// var userc =+prompt("");
// var userd =+prompt("");
// var usere =+prompt("");
// var totalvisits =usera+userb+userc+userd+usere
// alert('you have visited this website'+ totalvisits +'times')
// var birth =prompt ("Enter your Birth Year");
// document.write("My Birth year is " + birth)
// var visitorname = prompt("Enter your nmae");
// var producttitle = prompt("Enter your product");
// var quantity = prompt("Enter product Quantity");
// document.write( visitorname + " ordered " + quantity + producttitle + "(s) on XYZ Clothing store")
// chap-4
//Q-01
// var a = 20;
// var b = 40;
// var c = 60;
// alert( a + b + c);
// Legal variables
// var name = "abbas";
// var clas = "Abbas";
// var rollno = "abbas";
// var  date= "Abbas";
// var fathername = "Abbas";

// // illegal Variables
// var 122 ="Abbas";
// var -word= "Abbas";
// var h+3= "Abbas";
// var ^nav= "Abbas";
// var *agf= "Abbas";
// document.write("<h1>Rules for naming JS variables</h1>")
// var value = [ "Letters" , "alphabets" , "numbers at end" , "underScore" ,"_" , "$" , "name" , "Sensative" , "Keywords" ];
// document.write("Variables can only contain " + value[0] + " , " + value[1] + " , " + value[2] + " and " + value[3] + " . "  );
// document.write(  "<br/>" + "Variables must begin with a " + value[4] + " , " + value[5] + " and " + value[6] );
// document.write("<br/>" + "Variables name are case " + value[7]);
// document.write("<br/>" + "Variables name Should not be in JS " +  value[8]);
//Q-02
// var a = 3;
// var b = 5;
// var c = a + b;
// document.write("The sum of " + a + " and " + b + " are " + c)
// Subraction
// var a = 50;
// var b = 20;
// var total = a - b;
// document.write(" the total is " + total)

// Multiplication
// var a = 2;
// var b = 9;
// var total = a * b;
// document.write(" the total is " + total)

// Division
// var a = 50;
// var b = 10;
// var total = a / b;
// document.write(" the total is " + total)
// Modulus
// var a = 8;
// var b = 5;
// var total = a % b;
// document.write(" the total is " + total)
//Q-03
// var a;
// var b = 5; 
// var c = b + 1;
// var d = c + 7;
// var e = d -1;
// var f = e % 3;
// document.write("Value after a variable decleration is " + a)
// document.write( "<br/>" + "Initial Value: " + b)
// document.write( "<br/>" + "Value after Increment: " + c)
// document.write( "<br/>" + "Value after addition is: " + d)
// document.write( "<br/>" + "Value after Decrement: " + e)
// document.write( "<br/>" + "The Reminder is: " + f)
//Q-04
// var price = 600;
// var tickets = 5;
// var total = 600 * 5;
// document.write( "<br/>" + "Total Cost to buy " + tickets + " tickets to a movie is " + total + "PKR");
//Q-05
// var a = 7;
// var b = a * 1;
// var c = a * 2;
// var d = a * 3;
// var e = a * 4;
// var f = a * 5;
// var g = a * 6;
// var h = a * 7;
// var i = a * 8;
// var j = a * 9;
// var k = a * 10;
// document.write("<h1>Table of 7 </h1>")
// document.write("<br/>" + "7 x 1 = " + b)
// document.write("<br/>" + "7 x 2 = " + c)
// document.write("<br/>" + "7 x 3 = " + d)
// document.write("<br/>" + "7 x 7 = " + e)
// document.write("<br/>" + "7 x 5 = " + f)
// document.write("<br/>" + "7 x 6 = " + g)
// document.write("<br/>" + "7 x 7 = " + h)
// document.write("<br/>" + "7 x 8 = " + i)
// document.write("<br/>" + "7 x 9 = " + j)
// document.write("<br/>" + "7 x 10 = " + k)
//Q-06
// var c =prompt ("Enter Temperature In Celcius")
// var f =prompt ("Enter Temperature In Ferenheit")
// var celcius = (f - 32) * 5 / 9;
// var farenheit = (c * 9 / 5) + 32;
// document.write(c + "<sup>0</sup> C is " + farenheit + "<sup>0</sup> F"  )
// document.write("<br/>" + f + " <sup>0</sup> F is " + celcius  + " <sup>0</sup> C" );
//Q-07
// var a =prompt ("Price of item 1")
// var b =prompt( "Price of item 2")
// var c =prompt( "Ordered quantity of item 1")
// var d =prompt( "Ordered Quantity of item 2")
// var e =prompt( "Shipping charges")
// document.write("<br/> "  +"Price Of Item 1 is " + a)
// document.write("<br/> "  +"Price Of Item 2 is " + b)
// document.write("<br/> "  +"Ordered Quantity Of Item 1 " + d)
// document.write("<br/> "  +"Shipping Charges " + e)
//Q-08
// var totalmarks =prompt("totalmarks");
// var marksobtained =prompt("marksobtained");
// var per = totalmarks/marksobtained*100
// document.write("Your Percentage Is " + per)
//Q-09
// var usdtopkr = prompt("Enter usd value") * 104.80;
// var riyaltopkr = prompt("Enter Riyal value") * 28;
// var total = usdtopkr + riyaltopkr;
// document.write("Total Currency in PKR is: " + total)
// Q-10
// var number = 8;
// var add = number + 5;
// var multiply = add * 10;
// var divide = multiply / 2;
// var total = divide;
// document.write("Number is :" + number);
// document.write("<br/>" + "Add :" + "5");
// document.write("<br/>" + "Multiply :" +"10");
// document.write("<br/>" + "Divide :" + "2");
// document.write("<br/>" + "total is :" + total);
//Q-11
// var currentyear = 2022;
// var yearofbirth =prompt("your birth year")
// var yourage = currentyear - yearofbirth;
// document.write("<h1> Age Calculator </h1>");
// document.write("<br/>" + "Current Year: " + currentyear);
// document.write("<br/>" + " yearofbirth " + yearofbirth);
// document.write("<br/>" + "Your Age is : " + yourage);
//Q-12
// var radius =prompt("Enter radius");
// var circumference =(2*3.142) * radius;
// var area = (radius * radius) * 3.142
// document.write("<h1> The Geometrizer </h1>");
// document.write("<br/>" + "Radius Of Circle : " + radius );
// document.write("<br/>" + "Circumference Of Circle : " + circumference );
// document.write("<br/>" + "Area Of Circle : " + area );
//Q-13
// var snack = prompt("Your Favourite Snack");
// var age = prompt("Your Current Age");
// var maximumage =prompt("Your Maximum Age");
// var snacksperday = prompt("Snacks Per Day");
// var total = (maximumage - age) * snacksperday;
// document.write("<br/>" + "<h1> The Lifetime Supply Calculator </h1> ");
// document.write("<br/>" + "Your Favourite Snack:" + snack);
// document.write("<br/>" + "Your Current Age:" + age);
// document.write("<br/>" + "Your Maximum Age:" + maximumage);
// document.write("<br/>" + "You need " + total + snack + " to last you until the ripe old age of " + maximumage);
// Chapter 6-9

// Q-01
// var number = 10;
// document.write("<h1> Results</h1>");
// document.write("<br/>" + "The value of a is " + number);
// document.write("<br/>" + "----------------------------------------");
// document.write("<br/>" + "The value of ++a is " + (++number) );
// document.write("<br/>" + "Now The value of a is " + (number) );
// document.write("<br/>" + "----------------------------------------");
// document.write("<br/>" + "The value of a++ is " + (+number) );
// document.write("<br/>" + "Now The value of a is " + (++number) );
// document.write("<br/>" + "----------------------------------------");
// document.write("<br/>" + "The value of --a is " + (--number) );
// document.write("<br/>" + "Now The value of a is " + (number) );
// document.write("<br/>" + "----------------------------------------");
// document.write("<br/>" + "The value of a-- is " + (number--) );
// document.write("<br/>" + "Now The value of a is " + (number) );

// Q-02
// var a = 2;
// var b = 1;
// // var result = --a - --b + ++b + b--;
// document.write("A is : " + (a) );
// document.write("<br/>" + "B is : " + (b) );
// document.write("<br/>" + "value is when --a : " + (--a) );
// document.write("<br/>" + "value is when --a - --b : " + ( --a - --b ) );
// document.write("<br/>" + "value is when --a - --b + ++b : " + (--a - --b + ++b) );
// document.write("<br/>" + "value is when --a - --b + ++b + b-- : " + (--a - --b + ++b + b--) );

// Q-03
// var username = prompt("Enter Your Name")
// document.write(" Hello! " + username);

// Q-05
// var userinput = prompt("Enter number");

// var b = userinput * 1;
// var c = userinput * 2;
// var d = userinput * 3;
// var e = userinput * 4;
// var f = userinput * 5;
// var g = userinput * 6;
// var h = userinput * 7;
// var i = userinput * 8;
// var j = userinput * 9;
// var k = userinput * 10;

// if (userinput!==null) {

//     document.write("Table of " + userinput);
//     document.write("<br/>" + userinput + "x 1 = " + b);
//     document.write("<br/>" + userinput + "x 2 = " + c);
//     document.write("<br/>" + userinput + "x 3 = " + d);
//     document.write("<br/>" + userinput + "x 4= " + e);
//     document.write("<br/>" + userinput + "x 5 = " + f);
//     document.write("<br/>" + userinput + "x 6 = " + g);
//     document.write("<br/>" + userinput + "x 7 = " + h);
//     document.write("<br/>" + userinput + "x 8 = " + i);
//     document.write("<br/>" + userinput + "x 9 = " + j);
//     document.write("<br/>" + userinput + "x 10 = " + k);

// } else {
//     var l = 5 * 1;
//     var m = 5 * 2;
//     var n = 5 * 3;
//     var o = 5 * 4;
//     var p = 5 * 5;
//     var q = 5 * 6;
//     var r = 5 * 7;
//     var s = 5 * 8;
//     var t = 5 * 9;
//     var u = 5 * 10;

//     document.write("Table of 5");
//     document.write("<br/>" + " 5 x 1 = " + l);
//     document.write("<br/>" + " 5 x 2 = " + m);
//     document.write("<br/>" + " 5 x 3 = " + n);
//     document.write("<br/>" + " 5 x 4= " + o);
//     document.write("<br/>" + " 5 x 5 = " + p);
//     document.write("<br/>" + " 5 x 6 = " + q);
//     document.write("<br/>" + " 5 x 7 = " + r);
//     document.write("<br/>" + " 5 x 8 = " + s);
//     document.write("<br/>" + " 5 x 9 = " + t);
//     document.write("<br/>" + " 5 x 10 = " + u);
// }

// Q-06
// var subject = prompt("Enter First Subject Name");
// var subjecT = prompt("Enter Second Subject Name");
// var Subject = prompt("Enter Third Subject Name");
// var totalmarks = 100;
// var firstobtainmarks = prompt("Enter " + subject + " Obtained Marks");
// var secondobtainmarks = prompt("Enter " + subjecT + " Obtained Marks");
// var thirdobtainmarks = prompt("Enter " + Subject + " Obtained Marks");

// // document.write("<h1> Subject   TotalMarks   ObtainedMarks  Percentage  </h1>")
// document.write("<br/>" + "Subject 1: " + subject + " Total Marks: " + totalmarks + " Obatined Marks: " + firstobtainmarks + " Percentage: " + (firstobtainmarks / totalmarks * 100) + "%");
// document.write("<br/>" + "Subject 2: " + subjecT + " Total Marks: " + totalmarks + " Obatined Marks: " + secondobtainmarks + " Percentage: " + (secondobtainmarks / totalmarks * 100) + "%");
// document.write("<br/>" + "Subject 3: " + Subject + " Total Marks: " + totalmarks + " Obatined Marks: " + thirdobtainmarks + " Percentage: " + (thirdobtainmarks / totalmarks * 100) + "%");


// Chapter 9 -11

// Q-01
// var city = prompt("Enter your City name");
// city = city.toLowerCase();
// if(city == "karachi"){
// alert("Welcome To City of lights")
// };

// Q-02
// var gender = prompt("Enter your Gender")
// gender = gender.toLowerCase();
// if(gender == "male"){
//     alert("Good Morning Sir");
// }
// else{
//     alert("Good Morning Maam");
// };


// Q-03
// var signal = prompt("Enter Signal Colour");
// signal = signal.toLowerCase();
// if(signal == "red"){
// alert("Must Stop");
// }else if (signal == "yellow"){
//     alert("Ready to Move");
// }else if (signal == "green"){
//     alert("Move now");
// }else{
//     alert("enter valid color")
// }

// Q-04
// var fule = prompt("Enter Your Remaining Fule in liters");
// fule = fule.toLowerCase();
// if(fule > "0.25"){
// alert("You should go");
// }else{
//     alert("Please Refule")
// }

// Q-05

// this condition is displaying 
// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true"); 
// }

// this condition is not displaying
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// this condition is displaying but there should be else if and else 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// } if (++c < 14) {
//     alert("condition 3 is true");
// } if (c === 14) {
//     ("condition 4 is true");
// }

// this condition is displaying 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// this condition is displaying 
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// this condition is displaying 
// if("car" < "cat"){
// alert("car is smaller than cat");
// }


// Q-06
// document.write("<br/>" + "<h1>Marks Sheet </h1>");
// var userinput = prompt("Enter Marks Obtained");
// var totalmarks = 300;
// var percentage = (userinput/totalmarks) * 100;
// var remarks = ["Excellent" , "Good" , "You need to improve" , "Sorry"]
// document.write("<br/>" + "Total Marks: " + totalmarks);
// document.write("<br/>" + "Obtained Marks: " + userinput);
// document.write("<br/>" + "Percentage: " + percentage);
// if(percentage >= "80"){
//     document.write("<br/>" + "Grade: A* ");
//     document.write("<br/>" + "Remarks: " + remarks[0] );
// }else if (percentage >= "70"){
//     document.write("<br/>" + "Grade: A ");
//     document.write("<br/>" + "Remarks: " + remarks[1] );
// }else if(percentage >= "60"){
//     document.write("<br/>" + "Grade: B ");
//     document.write("<br/>" + "Remarks: " + remarks[2] );
// }else if(percentage < "60"){
//     document.write("<br/>" + "Grade: Fail ");
//     document.write("<br/>" + "Remarks: " + remarks[3] );
// }

// Q-07
// document.write("<h1> Guess The Number Game: </h1>");
// var secretnum = 6;
// var guess = prompt("Guess number from 1 to 10");
// if (guess == secretnum) {
//     alert("Bingo! Correct answer");
// } else if (guess == (1+secretnum)) {
//     alert("Close enough to the correct answer");
// };

// Q-08
// document.write("<h1> Number Divisible by 3 Checker </h1>")
// var userinput = +prompt("Enter number")
// if(userinput % 3 === 0){
//     alert("This number is divible by three");
// }else(
//     alert("this number is not divisible by three")
// )

// Q-09
// document.write("<h1> Even Odd Tester </h1>")
// var number = prompt("Enter a number");
// if(number % 2 == 0){
//     alert("This is even number");
// }else{
//     alert("This is odd number");
// };

// Q-10
// document.write("<h1> Temperature Checker </h1>");
// var temperature = prompt("Enter temperature");
// if(temperature > 40){
//     alert("Its too hot outside");
// }else if (temperature > 30){
//     alert("The weather Today is normal");
// }else if(temperature > 20){
//     alert("Todays Weather is cool");
// }else if(temperature > 10){
//     alert("Omg!Todays weather is cool");
// };


// Q-11
// document.write("<h1> Calculator </h1>");
// var operator = prompt('Enter operator ( either +, -, * or / ): ');
// var number1 = parseFloat(prompt('Enter first number: '));
// var number2 = parseFloat(prompt('Enter second number: '));

// var result;
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }
// alert(`${number1} ${operator} ${number2} = ${result}`);


// Chapter 12 - 13

// Q-01
// document.write("<h1>Character Checker </h1>")
// // program to find the ASCII value of a character

// // take input from the user
// const string = prompt('Enter a character: ');

// // convert into ASCII value
// const result = string.charCodeAt(0);

// alert(`The ASCII value is: ${result}`);

// Q-02
// take input from the user
// document.write("<h1> Largest Number Checker</h1>")
// var num1 = parseFloat(prompt("Enter first number: "));
// var num2 = parseFloat(prompt("Enter second number: "));
// var num3 = parseFloat(prompt("Enter third number: "));
// var largest;

// // check the condition
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// // display the result
// alert("The largest number is " + largest);

// Q-03
// document.write("<h1> Number Checker </h1>")
// var number = prompt("Enter number")
// if(number === 0){
//     alert("Its zero");
// }else if(number >=1 ){
//     alert("It is Positive number");
// }else if(number <= -1){
//     alert("It is Negative number");
// }


// Q-04
// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// alert(value);

// Q-05
// var creatpass = prompt("Creat a new Password");
// var pass = prompt("Enter Your Password");
// if(creatpass === pass){
//     alert("Welcome User")
// }else{
//     alert("Acess Denied")
// }

// Q-06
// var greeting;
// var hour = 13;
// if (hour < 18){
//    alert (greeting = "Good day");
// }else {
//     alert( greeting = "Good evening");
// }

// Q-07
// var timeinput = prompt("Enter time in 24 hour format");
// if (timeinput >= 0000 && timeinput < 1200) {
//     alert("Good Morning");
// } else if (timeinput >= 1200 && timeinput < 1700) {
//     alert("Good Afternoon");
// } else if (timeinput >= 1700 && timeinput < 2100) {
//     alert("Good Evening");
// } else if (timeinput >= 2100 && timeinput <= 2359) {
//     alert("Good Night");
// }

// chapter 14-16

// Q-01
// var studentsname =[];

// Q-02
// var arrayA = [];
// var arrayB = new Array();

// Q-03
// var arrayA = ["Hi" , "Hello" , "Bye"];
// alert(arrayA);

// Q-04
// var number = [1 , 2 , 3 , 4 , 5 , 6];
// alert(number);

// Q-05
// var bolea =[true , false];
// alert(bolea);

// task 6
// var mix=["hello" , 1 , true , ""];
// alert(mix);

// Q-07
// document.write("<h1> Qualifications </h1>");
// var qualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PhD"]
// document.write("<br/>" + "1. " + qualification[0]);
// document.write("<br/>" + "2. " + qualification[1]);
// document.write("<br/>" + "3. " + qualification[2]);
// document.write("<br/>" + "4. " + qualification[3]);
// document.write("<br/>" + "5. " + qualification[4]);
// document.write("<br/>" + "6. " + qualification[5]);
// document.write("<br/>" + "7. " + qualification[6]);
// document.write("<br/>" + "8. " + qualification[7]);

// Q-08
// var totalmarks = 500;
// var studentsname = ["Haris" , "Ali" , "Farhan"]
// var marks =[400 , 350 , 300];
// var percentage =marks[0] / totalmarks * 100;
// var Percentage = marks[1] / totalmarks * 100;
// var percentagE =  marks[2] / totalmarks * 100;
// document.write("<br/>" + "Score of " + studentsname[0] + " is " + marks[0] + " Percentage" + percentage + "%");
// document.write("<br/>" + "Score of " + studentsname[1] + " is " + marks[1] + " Percentage" + Percentage + "%");
// document.write("<br/>" + "Score of " + studentsname[2] + " is " + marks[2] + " Percentage" + percentagE + "%");

// Q-09
// A
// var color = ["red" , "blue" , "green" , "black" , "white"];
// var addbeg = prompt("Which colour you want to add in beginning of arry?")
// color.unshift(addbeg);
// document.write(color)

// B
// var color = ["red" , "blue" , "green" , "black" , "white"];
// var addbeg = prompt("Which colour you want to add in beginning of arry?")
// color.push(addbeg);
// document.write(color)

// C
// var color = ["red" , "blue" , "green" , "black" , "white"];
// document.write(color)
// color.unshift("Pink" , "yellow");
// document.write("<br/>" + color);

// D
// var color = ["red" , "blue" , "green" , "black" , "white"];
// document.write(color)
// color.shift("red");
// document.write("<br/>" + color);

// E
// var color = ["red" , "blue" , "green" , "black" , "white"];
// document.write(color)
// color.pop("white");
// document.write("<br/>" + color);

// F , G
// var colors = ["Red", "Green", "Blue"];
// var removed = colors.splice(0,1); // Remove the first element

// document.write(colors); // Prints: Green,Blue
// document.write(removed); // Prints: Red (one item array)
// document.write(removed.length); // Prints: 1

// removed = colors.splice(1, 0, "Pink", "Yellow"); // Insert two items at position one
// document.write(colors); // Prints: Green,Pink,Yellow,Blue
// document.write(removed); // Empty array
// document.write(removed.length); // Prints: 0

// removed = colors.splice(1, 1, "Purple", "Voilet"); // Insert two values, remove one
// document.write(colors); //Prints: Green,Purple,Voilet,Yellow,Blue
// document.write(removed); // Prints: Pink (one item array)
// document.write(removed.length); // Prints: 1

// Q-10
// var score = [230,300,400,500,800,100,180,340];
// document.write(score);
// score.sort();
// document.write("<br/>" + score);

// Q-11
// document.write("City list")
// var city = ["Karachi" , "Lahore" , "Islamabad" , "Multan"];
// document.write("<br/>" + city)
// document.write("<br/>" + "Selected Cities");
// document.write("<br/>" + city[0] + "," + city[2]);

// Q-12
// var arr = ["This" , " is ",  "my ",  "cat"];
// document.write("Arry:");
// document.write("<br/>" + arr);
// document.write("<br/>" + "String:");
// arr = arr.join("");
// document.write("<br/>" + arr);

//  Q-13
// var device = ["keybord" , "mouse" , "printer"];
// document.write("<br/>" + device[0]);
// document.write("<br/>" + device[1]);
// document.write("<br/>" + device[2]);


// Q-14
// var device = ["keybord" , "mouse" , "printer"];
// document.write("<br/>" + device[2]);
// document.write("<br/>" + device[1]);
// document.write("<br/>" + device[0]);

// Q-15
// var brand = ["Apple" , "Samsung" , "Nokia"]
// document.write("<br/>" + brand[0]);
// document.write("<br/>" + brand[1]);
// document.write("<br/>" + brand[2]);

// Chapter 17 - 20

// Q-01
// var Arr=[[1,2],[3,4],[5,6]];

// Q-02
// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];
// document.write(activities);

// Q-03
// for (var input = 1; input <= 10; input++) {
//     document.write("<br/>" + input);
//    }

// Q-04
// /* program to generate a multiplication table
// upto a range */

// // take number input from the user
// const number = parseInt(prompt('Enter an integer: '));

// // take range input from the user
// const range = parseInt(prompt('Enter a range: '));

// //creating a multiplication table
// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     document.write( "<br/>" + `${number} * ${i} = ${result}`);
// }

// Q-05
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(var i = 0; i < fruits.length; i++){ 
//     document.write("<br/>" + fruits[i] );
//     document.write("<br/>" + "element at index " + i + " is " + fruits[i] )
//     }
