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

//Task for finding square numbers
let k=0;
while(k<=200){
 
    console.log(k);             //------------Check whether is square number
    if(Math.sqrt(k)%1===0 && k>1){
        break;
    }
    k+=1;
}

//Task for printing even numbers
let ö=0;
for(ä=61;ä<=80;ä++){
    if(ä%2===0){
        ö+=ä;
        console.log(ä);
    }
}
console.log(ö);

//Multiplication Table for number 9
const b=9;
for(i=1;i<=9;i++){
    console.log(i,'*',b,'=',i*b);
}

//Countdown
for(i=81;i>=55;i--){
    console.log(i);
}