//Task 1(Array and function inside of an object)
const mahin={
    name:'Mahin',
    age:27,
    act:function(num1,num2){
        console.log(num1+num2);
    },
    cert:[{hsc:'Pass',ssc:'pass Highly',grade:5},{nnn:'Pass',kkk:'pass Highly',edarg:5}]
}
mahin.act(2,3)

//Task 2 (Searching specific keywords value in objects)

const työpaikka=[
    {name:'IT',paikka:'Uusima,Helsinki',palkka:2000},
    {name:'IT',paikka:'Uusima,Espoo',palkka:2000},
    {name:'IT',paikka:'Uusima,Vantaa',palkka:2000},
    {name:'IT',paikka:'Uusima,Helsinki',palkka:2000},
    {name:'IT',paikka:'Uusima,Kirkkonomi',palkka:2000},
    {name:'IT',paikka:'Uusima,Helsinki',palkka:2000},
    {name:'IT',paikka:'Uusima,Helsinki',palkka:2000},
    {name:'IT',paikka:'Uusima,Vantaa',palkka:2000},
    {name:'IT',paikka:'Uusima,Helsinki',palkka:2000},
    {name:'IT',paikka:'Uusima,Helsinki',palkka:2000},
    {name:'IT',paikka:'Uusima,Espoo',palkka:2000},
    {name:'IT',paikka:'Uusima,Helsinki',palkka:2000},
    {name:'IT',paikka:'Uusima,Kerava',palkka:2000},
    {name:'IT',paikka:'Uusima,Helsinki',palkka:2000},
]

function etsiPaikka(objekti,paikanNimi){
    let uusiArray=[];
    for(let paik of työpaikka){
        if(paik.paikka.includes(paikanNimi)){
            uusiArray.push(paik);
        }
        return uusiArray
    }
}
const result= etsiPaikka(työpaikka,'Helsinki');
console.log(result);