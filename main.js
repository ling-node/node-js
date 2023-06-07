// const prompt= require('prompt-sync')();
// const log =console.log;
// let username = prompt('как тебя зовут?');
// log(`Привет, ${username}`);

//const log =console.log;
 
//log('Как тебя зовут?');
user_ask_lastname =false;
process.stdout.write("Кактебя зовут?");

process.stdin.on('data',(data)=>{
    uname = data.toString();
    console.log('ur name is '+uname);
    process.stdin.pause();
    user_ask_lastname =true;
});

setTimeout(()=>{
    if(user_ask_lastname){
        process.stdout.write("Какау тебя  фамилия?");
    process.stdin.resume();
    } 
},5000);
