//arrow function
var product=(a,b)=>{console.log(a*b)};
product(2,2);

//student obj

let obj={
    name:'John',
    age:'20',
    greet(){
        console.log('Hi i am '+ this.name);
    }
}
obj.greet();
