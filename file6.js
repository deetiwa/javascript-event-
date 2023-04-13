// different type of error in javascript:-1.EvalError=> when using eval method., 2.RangeError =>HTML value type (Range)
// 3.ReferenceError => variable/fun^ not define., 4.SyntaxError => spelling mistake, symbole missing("",'',{},)
//5. TypeError => when a variable or parameter is not of a valid type.,6.URIError => when encodeURI() or decodeURI() are passed invalid parameters. 
//7. AggregateError => when multiple errors need to be reported by an operation, for example by Promise.any().

try{
    console.log('Start of try');

   hello;

    console.log('End of try');
}
catch{
    console.log('Error has Occurred');
}

// other type of use

try{
    console.log("Welcome in Page1");
    myfunc();                                // function not call given error myfunc is not defined
    console.log("End of page");
}
catch(error){
    console.log(error);
}

// other method use

try{
    blabla;
}
catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

}