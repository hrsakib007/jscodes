
//////////////////////////// Declaring a vriable and some basics //////////////////
/*
var a,b,c;
a=10;
b=20;
c=a+b;
document.write(c);
document.write("<br>");

//dcoument.write is the print option in python
a++;
c=a+b;
document.write(a);
const a=10;
  a=15;
document.write(a);


 /////////////// TYPES /////////////////////////////
var x = "hello";
  x=23;
  x="true";
  x=["html", "css", "js"];
  x={
      name: "Sakib";
      id: "kak"
  }

////////////////////// undefines and typeof /////////////////////////
x = undefined;
x;
x=null;
document.write(x);
document.write("<br>");
document.write(typeof x);
x+=y     ---x=x+y----

var x = 10;
var y= 3;
x%y;
// percentage sign stands for modulus or vagsesh.
document.write(x);


////////////////////// if else /////////////////////////////
document.write(4=="4");
if(10>10){
    document.write("greater")
}else{
    document.write("lower")
}


///////////////////// letitions ///////////////////////////
let a,b,c;
  a=10;
  b=5;
  let a =7;
  c=a-b;
  document.write(c);


var a,b,c;
  a=10;
  b=5;
  var a=7;
  c=a-b;
  document.write(c);


////////////////////// Constant //////////////////////////
  const a =10;
  const b=5;
  const c= a-b;
    const a =7;
  document.write(c);
  var x;


  document.write(x);
  document.write(:"<br>");
  document.write(typeof x);
  var x=10;
  var y=2;
  x**=y;   //x=x**y
  document.write(x);
  var x = "30";



/////////////////////// True False //////////////////////////
document.write(typeof x);
true false
var a,b;
a =10;
b=20;
console.log(a<=b);  //!= means not equal


var a =10;
var b=20;
if(a>b){
    document.write("b id greater");
}else{
    document.write("a is not greater than b");
}

var a = 5;
if(a>10){
    document.write("a is greater");
}else{
    document.write("a is lower")
}

///////////////// If Else ////////////////////////
var per =57;
if(per>=80 && per<=100){
    document.write("A+");
}else if(per>=60 && per<80){
    document.write("A");
}else if(per>=45 && per<60){
    document.write(A-);
}else if(per>=33 && per<45){
    document.write("B");
}else if(per<30){
    document.write("Fail");
}else{
    document.write("Please enter a valid number")
}

////////////////////// Usage of switch /////////////////
var day=6;
switch(day){
    case 1:
        document.write("today is sunday");
        break;
    case 2:
        document.write("today is monday");
        break;
    case 3:
        document.write("today is tuesday");
        break;
    case 4:
        document.write("today is wednesday");
        break;
    case 5:
        document.write("today is thursday");
        break;
    case 6:
        document.write("today is friday");
        break;
    case 7:
        document.write("today is saturday");
        break;

    default:
        document.write("enter the valid date")
        break;
}


//////////////////// related to age ////////////////////////
var age=15;
switch (false) {
    case (age>14 && age<=20):
        document.write("you are not eligible");
        break;
    case (age>20 && age<=30):
        document.write("you are eligible");
        break;

    default:
        document.write("enter the valid date")
        break;
}

//////////////// function for grading system ////////////////////////
var a =20;
if(a>30){
    document.write("true");
}else{
    document.write("false")
}
var per =50;
if(per>=80 && per<=100){
    document.write("A+");
}else if(per>=60 && per<80){
    document.write("A");
}else if(per>=45 && per<60){
    document.write(A-);
}else if(per>=33 && per<45){
    document.write("B");
}else if(per<30){
    document.write("Fail");
}else{
    document.write("Please enter a valid number")
}


/////////////////// Weekdays /////////////////////////
var day=6;
switch(day){
    case 1:
        document.write("today is sunday");
        break;
    case 2:
        document.write("today is monday");
        break;
    case 3:
        document.write("today is tuesday");
        break;
    case 4:
        document.write("today is wednesday");
        break;
    case 5:
        document.write("today is thursday");
        break;
    case 6:
        document.write("today is friday");
        break;
    case 7:
        document.write("today is saturday");
        break;

    default:
        document.write("enter the valid date")
        break;
}



var age=15;
switch (false) {
    case (age>14 && age<=20):
        document.write("you are not eligible");
        break;
    case (age>20 && age<=30):
        document.write("you are eligible");
        break;

    default:
        document.write("wrong valid")
        break;
}

/////////////// Prompt Box ///////////////
/*
prompt("What is your name?"); 
var a = prompt("what is your name?");
document.write(a);
*/

//input ki nibo output ki pabo. client theke data nite prompt box use kora
//use of prompt box; to find out exam grade.

/////////////////// Function /////////////////////
//function definition
//functoin call 

/*
function hello() {
    document.write("hello world");
}
hello();
hello();
hello();
*/

//ekhne hello() ta funtion call ar full ta function definition
//funtion boro jinish ke choto kore uposthapon korbe kaj ta ke choto korbbe. same kaj jate barbar korte na hoy.

/*
function sum(a,b) {
    document.write(a + b);
}
sum(20+10);
*/

//variable er value declare kore dile barbar change korte hoy kinty functuion die eta efficiently kora jay 
//function is extremely important in js

/////////////////////// Gloabal & Local Variable /////////////////////

/*
var a =10; //evabe function er baire thakle ta global variable ar vitore thakle ta local variable. local shudhu je funtion er moddhe dea hobe tar moddhei kaj korbe
function sum() {
    document.write(a);
}
sum();
*/

//vul ber korar jonno incpect -- console

//////////////////////////// JS Events //////////////////////////
//bivinno situation  e website er kemon output ashbe sheta show korbe . more from w3schools

/*
function hello() {
    document.write("Welcome");
}
*/

////////////////// Loop ///////////////////////
// document.write("hello world");
// a++ means a=a+1

/*
initialisation
var a = 10; etai initialisation cause eta ke amra declare kore DeferredPermissionRequest.
*/

/*
var a =1 ;
while (a<=10){
    document.write("hello world <br>");
    a = a+1; //ei line ta ekhane incrementt
}
*/
/*
var a =1 ;
while (a<=10){
    document.write("hello world <br>");
    a = a+1; //ei line ta ekhane incrementt
}
*/
/*
var a =1 ;
while (a<=10){
    document.write("hello world <br>");
    a = a+1; //ei line ta ekhane incrementt
}
*/

/*
var a =1 ;
while (a<=100){
    document.write( a + "hello world <br>");
    a = a+1; //ei line ta ekhane incrementt
}
*/

//ekta jinish barbar print korate chaile loop use kora hoy. ek line barbar likte loop use kora hoy. 
//document.write is a statement.  
//loop er moddhe variable(inisialisation), condition, statement, increment / decrement thakbe

/*
var a =10 ;
document.write("<ul>");
while (a>=1){
    document.write( "<li>" + a + " )hello world <br>" + "</li>");
    a = a-1; 
}
document.write('</ul>');
*/

//varibale or number er jonno no quotation or comma.
//array korar shomoy ekta variable ke ekadhik value die kaj korbo so ejonno + sign beshi use hobe. 
//variabale ke comma die declare korle sheta string hoe jabe. 
/////////////////////End of WHILE Loop///////////////////////

                            ////////////////////Do While Loop///////////////////////////
/*
var a = 1 ;
do {
    document.write(a + ")Hello World <br>");
    a = a +1;
} while (a<=10);
*/

//while loop e condition shurute thake ar do while loop e condition last e thakbe

                            ///////////////////// FOR Loop ////////////////////////
/*
for(var a =1; a<=10; a++ ){
    document.write( a + ") Hello World  <br> ")
}
*/
//mostly used for loop . cause short. we will only work with for loop nothing else other than that. 

/*
for( var a=1; a<=10; a++){
    if (a==3) {
        document.write( a + ")Hey<br>")
        continue //jate er por theke 4 no continue hoy   //continue er poriborte break use korle ototuke eshe theme jabe.
    }
    document.write( a + ")Hello World <br>");
}
*/

//programming e string khub kom, numbermostly used. 

//////////////////////// In case of Numbers /////////////////////

/*
for (var a =1 ; a <=10; a++){
    if (a%2==0){
        document.write(a + ")even <br>")
    }
}
*/

//even jor shonkha odd number bejor shonkha. 
//ei method e moulik shonkha o ber kora jay.


/////////////////////////////////// ARRAY //////////////////////////////
//array stores multiple value. 
//string, number, bulean shomporke jansi, undefines shomporke jansi.

//var a = 10, 20, 30 ; //evabe numbeer near khetre quotation use kora jabe na

/*
var a = [10, 20, 30];
document.write(a[2] ); 
*/

//shuru hobe 0 theke. ekhane 2 ta index.   //var or array jai hok only ekbar declare korbo. index call kra jabe. but varibale por por duibar call kora jabe na. 
// -1,-2 eshob python e kaj kore but js e kaj kore na. uporer udaharon python e hole -1 means 30


///How to find source code from Github.  searching by user name thn user e jabo. -- repository then okhan theke peye jabo.
///how to delete : setting -- nicher dike delete this repository -- jeta likte bolse copy kore paste kore dea. 

///openinig an own blog in blogger dot com. and adding social link or others in that blog. important info save kore rakha jate barbar search korte na hoy. 

/*
initialisation
var a = 10; etai initialisation cause eta ke amra declare kore DeferredPermissionRequest.
*/

/*
for (var a =1 ; a <=10; a++){
    if (a%2==0){
        document.write(a + ")even <br>")
    }
}
*/

/*
for( var a=1; a<=10; a++){
    if (a==3) {
        document.write( a + ")Hey<br>")
        continue //jate er por theke 4 no continue hoy   //continue er poriborte break use korle ototuke eshe theme jabe.
    }
    document.write( a + ")Hello World <br>");
}
*/

/*
var a =1 ;
while (a<=10){
    document.write("hello world <br>");
    a = a+1; //ei line ta ekhane incrementt
}
*/
/*
var a =1 ;
while (a<=10){
    document.write("hello world <br>");
    a = a+1; //ei line ta ekhane incrementt
}
*/

