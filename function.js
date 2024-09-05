function evenSum(number){
    let sum=0;
    for(let num of number){
        if(num%2===0){
            sum+=num;
        }
    }
    return sum;
}
console.log(evenSum([3,2,4,5,7,6,9,7,2,7,4,3,3,2]));