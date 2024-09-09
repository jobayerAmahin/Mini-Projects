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

//
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
 }, 100);
}

//Min of array
const arr=[23,24,25,90,34,55,64,99,20,45,11,4];
function getMin(number){
    let minNum=arr[0];
    for(const ats of number){
       if(ats<minNum){
        minNum=ats;
       } 
    }
    return minNum;
}
const result=getMin(arr);
console.log(result);

//Max of object

const puhelin=[
    {nimi: 'shawmi', hinta:18880, kamera:'12mp', kauppa:'sello',quantity:2}, 
    {nimi: 'shawmi-2', hinta:8880, kamera:'12mp', kauppa:'sello',quantity:3}, 
    {nimi: 'shawmi-3', hinta:48880, kamera:'12mp', kauppa:'sello',quantity:2}, 
    {nimi: 'shawmi-4', hinta:28880, kamera:'12mp', kauppa:'sello',quantity:4}, 
    {nimi: 'shawmi-5', hinta:38880, kamera:'12mp', kauppa:'sello',quantity:5}, 
    {nimi: 'shawmi-6', hinta:18880, kamera:'12mp', kauppa:'sello',quantity:1}, 
]
function maxHinta(numero){
    let maxP=numero[0];
    let totaaliSum=0;
    for(const num of numero){
        if(num.hinta>maxP.hinta){
            maxP=num
        }
        const toatlihinta=num.hinta*num.quantity;
        totaaliSum=totaaliSum+toatlihinta;
    }
    //return maxP;
    return totaaliSum;
}
const mH=maxHinta(puhelin);
console.log(mH);