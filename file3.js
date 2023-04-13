class student                                          // class student                     
{
    constructor ()                                   // constructor function
    {
        console.log("Constructor Function call");
    }
}
let a = new student();                         // create object for call constructor function



// how to create property & assign value

class employee                                          // class student                     
{
    constructor ()                                   // constructor function
    {
        let name;
        console.log("Constructor Function call");
    }
    hello()
    {
        console.log("Hello  " + this.name);
    }
}
let b = new employee();                        // create object for call constructor function
b.name = "Rohit";
b.hello();                                    // call method



