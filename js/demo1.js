 // khong quan tam kieu du lieu
 // nul number string boolean array function
 var x = 10;
 x= "T2505E";

 var a = 10;
 var b = "20";
 var c= 'abcde';

 // n + n = n
 // n + s = s
 // s + s = S

 console.log(a+a); //20
 console.log(a+b); //1020
 console.log(b+a); //2010
 console.log(b+c); //20abcdef
var t = false;

if(a > 5){
console.log("A");
} else if(a>=10){
    console.log("B");
}else{
    console.log("D");
}

for(var i=0;i<10;i++){
    console.log("i=" +i);
}

var arr = []; //day la 1 array
//arr[0] = 9;
//arr[9] = 12;
//arr[2] = 182;
arr.push(9); //0
arr.push(12); //1
arr.push(182); //2
//arr.push("Hello");
//arr.push(true);
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//duyet mang--map (tham chieu tung phan tu 1)
arr.map(e=>{
    console.log(e);
});
arr.map((e,i)=>{
    console.log(e);
})
//sap sep lai mang (noi bot)
arr.sort();
//tim kiem (tuyen tinh)
arr.includes(9); //true/false
if(arr.includes(9)){

}
var pi = "3.14159"; // day la chuoi
pi = parseFloat(pi); // chuyen thanh so thuc (la ham cos san)
pi = parseInt(pi); // chuyen thanh so nguyen

function tinh_tong(a,b){
    var c = a + b;
    return c;
}
const phep_tru = function(a,b){
    var c = a - b;
    return c;
} // viet kieu nao deu duoc
const phep_nhan = (a,b) => {
    var c = a * b;
    console.log(c);//return c;
}
phep_nhan(7,3);

// mot so ham hay dung
//alert("ban chua du 18 tuoi truy cap website");  // return void (khong lam gi ca chi chay)
//confirm("cam doan ban tren 18 tuoi"); // retuen boolear (xac nhan them lan nua)

//if(confirm("cam doan ban tren 18 tuoi?")){
 //   var s = prompt("vui long nhap lai so tuoi cua ban"); // return string
//    var t = prompt("ban bao nhieu tuoi?"); //string
//    alert("chao mung ban gia nhap"+s);
//}else{
 //   alert("vui long thoat khoi website va cho du tuoi");
//}

var r = Math.random(); // return number -> duoble/float 0->1 vd 0.12791
r = r * 100; ///12.7291
r = parseInt(r); //12

// LUCKY NUMBER
//tao so ngau nhien tao tu 0->99(<100)
//cho nguoi choi nhap so du doan cua minh
