//Question 1. Create a hierarchy of person, employee and developers.

function person(){
    this.name="Anamika";
}

function employee(){
    this.company="To The New";
}

employee.prototype=new person();

function developer(){
    this.role="JavaScript Trainee";
}

developer.prototype=new employee();

var emp=new developer;
console.log(emp.name);
console.log(emp.company);
console.log(emp.role);

//Question 2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.

let new_arr= function(){
    let arr=[1,2,3,4,5];
    for(let i=0;i<arr.length;i++){
        setTimeout(function() {
        console.log(arr[i]);
        },3000 * i);
    }
};

let ans=new_arr;
ans();

//Question 3. Explain the difference between Bind and Call (example).

var sayHello = function (greeting) {
    greeting = greeting || 'Hello'; 
    console.log(greeting, this.name);
};

var abhi = {name: 'Abhishek'};
var bindMethod=sayHello.bind(abhi); 

var anami = {name: 'Anamika'};
sayHello.call(anami, 'Hey'); 
bindMethod();

//Question 5. Create a function which returns the number of invocations and number of instances of a function.

function createFunction(instanceName) {
    let invocationCount = 0;  
    function func() {
        invocationCount++; 
        console.log(`${instanceName} invoked ${invocationCount} time(s).`);
    }
    return func;
}

let functionInstanceCount = 0;
const func1 = createFunction('func1');
functionInstanceCount++; 
func1();  
func1();  

const func2 = createFunction('func2');
functionInstanceCount++; 
func2();  
func2(); 
console.log(`Total function instances created: ${functionInstanceCount}`);  
