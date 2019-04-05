function longestDigitsPrefix(inputString){
  var anst=0,ans;
  for(var i=0;i<inputString.length;i++){
    var t=0,s="";
    while(inputString[i]>='0' && inputString[i]<='9'){
      s+=inputString[i];
      t++;
      i++;
    }
    if(t>anst){
      anst=t;
      ans=s;
    }
  }
  return ans;
}
var s="123aa1";
console.log(longestDigitsPrefix(s));
