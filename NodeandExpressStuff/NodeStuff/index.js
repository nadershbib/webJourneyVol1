const superheroes = require('superheroes');
const supervillains= require('supervillains')

for(var i=1;i<=10;i++){
    if(i==1){
        console.log("Tournament starts! here are the rounds :")
    }
    console.log(supervillains.random()+" vs "+superheroes.random());
}
