var a;
var b;
var c;
var sum;
    a=0;b=1;c=1
    sum=a+b;
for (i=1;i<30;++i){
    c=b+a;
    a=b;
    b=c;
    sum=sum+c;
}
console.log(sum);