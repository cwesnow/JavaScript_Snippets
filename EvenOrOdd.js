function start(){

    var SENTINEL = 0;

    do {
        var input = readInt("Enter a number: ");
        if(isEven(input)) {
            println("Number was Even");
        }else{
            println("Number was Odd");
        }
    }
    while(input === SENTINEL);

    println("Done!");
}

function isEven(number){
    if(number%2 === 0){
        return true;
    }else{
        return false;
    }
}
