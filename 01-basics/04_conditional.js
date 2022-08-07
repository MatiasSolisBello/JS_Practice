var grade = 55;

 if ( grade >= 90 ){
    console.log('A');
}else if(grade >= 80){
    console.log('B');
}else if(grade >= 70){
    console.log('C');
}else if(grade >= 60){
    console.log('D');
}else{
    if(grade < 50){
        console.log('-F');
    }else{
        console.log('+F');
    }
}

var grade2 = 10;
var grade3 = 20;

// si grade2  > grade3 es verdadero -> retorna grade2. 
//De lo contario, retorna grade3
var result = ( grade2  > grade3 )? grade2 : grade3
console.log(result);


var result = ( grade2  > grade3 )? function(){
    console.log('A es mayor que B');
    return grade2;
}() : function(){
    console.log('B es mayor que A');
    return grade3
}();
console.log(result);

var a=undefined;
var b=4

var first = a || b;
console.log(first);

