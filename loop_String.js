//Loop Tasks
let i=0;
let sum=0;
while(i<=200){
    i+=1;
    sum+=i;
    console.log(sum);  //-----------------Output
    if(sum>100){
        break;
    }
}


let k=0;
while(k<=200){
 
    console.log(k);             //------------Check whether is square number
    if(Math.sqrt(k)%1===0 && k>1){
        break;
    }
    k+=1;
}