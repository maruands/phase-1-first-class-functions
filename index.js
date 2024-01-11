//function with call back
function receivesAFunction(callback)
{
    callback();
}

//function returnsANamedFunction() takes no arguments
function returnsANamedFunction()
{
    var name = function named()
    {
        return "andrew";
    }
    return name;
}


function returnsAnAnonymousFunction()
{
    return function()
    {
        return "anonymous function";
    }
}