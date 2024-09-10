//Task of creating and adding property

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors.blue);  //-----------------Output
console.log(colors['green']); //--------------Output

colors.white='#00ffpp';
console.log(colors); //-----------------------Output

//Task of accessing object property

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks); //--------Output

// Task of counting number of object properties
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true,
    pro:'wkw'
};

console.log(Object.keys(student2).length);
for(let ky in student2){
    console.log('key',ky, '|','value',student2[ky]);
}