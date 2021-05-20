//task 1
function convertFahrToCelcius(far) {

    if(typeof far === "string" || typeof far === "number"){
        var result = (far - 32)* (5/9) ;
        var res = result.toFixed(4);
              return res
    };
    if(Array.isArray(far)){
        return `${far} is not a valid number but a/an array.` 
    };
    if(typeof far === "object"){
        var value = JSON.stringify(far);
        return `${value} is not a valid number but a/an. object`
    };
    
};
console.log(convertFahrToCelcius("0"));
    console.log(convertFahrToCelcius([1,2,3,4]));
console.log(convertFahrToCelcius({ age: 10 }));



//task 2
function checkYuGiOh (n){
    if(!Number(n)){
      return console.log(`invalid parameter "${n}`);
    }
    else{
       var res = [];
     for(var i=1; i<= n; i++) {
     if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
       res.push("yu-gi-oh");
     }
     else if(i % 2 === 0 && i % 3 === 0 ){
    res.push("yu-gi");
     }
     else if(i % 2 === 0 &&  i % 5 === 0){
       res.push("yu-oh");
     }
     else if(i % 3 === 0 && i % 5 === 0){
       res.push("gi-oh");
     }
     else if(i % 2 === 0 ){
       res.push("yu");
     }
     else if( i % 3 === 0 ){
       res.push("gi");
     }
     else if( i % 5 === 0){
       res.push("oh");
     }
     else {res.push(i)}
     }
   return res;
    }
 }
 
 console.log(checkYuGiOh(10));
 console.log(checkYuGiOh(5));
 console.log(checkYuGiOh("fizzbuzz is meh"));
 console.log(checkYuGiOh(30));
