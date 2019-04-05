function Candy(n,m){
    var res1=0,res2=0;
    res1 = parseInt(m/n);
    res2 = parseInt(res1*n);
    return parseInt(res2);
  }
console.log(Candy(3,10));
