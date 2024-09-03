rid=["Dig","Dug","Big","Bug"];
console.log(rid);

rid.pop();
console.log(rid);

rid.push("Dust");
console.log(rid);

rid.shift();
console.log(rid);

rid.unshift("Rust");
console.log(rid);

let uusiArray=[2,3,4,5,6,7,8,9];
for(let num of uusiArray){
    console.log(num);
}

let sum=0;
while(sum<5){
    sum+=1;
    console.log(sum);
}

/*String Slice, Split, Join*/

const rtd='Hey! Rabib'
console.log(rtd.slice(2,6));

console.log(rtd.split(' '));

const tds=['tr','ma','ba','us','po','wq'];
console.log(tds.join(' '));

// Reverse String

const rix='Hey! Missä sää oot? Mä mene ulos lasten kanssa';
const rixReverse=rix.split('').reverse().join('');
console.log(rixReverse);

//Object

const college={
    name: 'vnc',
    grp: ['1','2'],
    unique:{
        color:'red',
        gpa:{
            grade:'6',
        }
    }
}
console.log(college.unique.gpa.grade)

//
let str = "Mississippi";
console.log(str.indexOf("i", 3));