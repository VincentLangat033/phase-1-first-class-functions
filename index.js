function receivesAFunction(myCall){
    return myCall()
    

}
receivesAFunction("Great work"),function (myCall){ "Hello there " +myCall}

function returnsANamedFunction(){
    return function myCase(){
        return "Today is a great day"
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        return "this is anonymous"
    }
}
