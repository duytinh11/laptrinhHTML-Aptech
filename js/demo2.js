// setTimeout(function(){
//     alert("Ping....");
// }, 5000);//se thuc hien sau 500ms vong lap 1 lan

// setInterval(function(){
//     alert("Ping..");
// },3000); // vong lap tre va vong lap vo han

// var m = 10;
// var s = 0;
// var timer = setInterval(function(){
//     console.log(m+":"+s);
//     s--;
//     if(s<0){
//         m--;
//         s=59;
//     }
//     if(m<0){
//         clearInterval(timer);
//     }
// }, 10);

alert("Task 1");
setTimeout(function(){
    alert("Task 2");
}, 5000);
alert("Task 3");