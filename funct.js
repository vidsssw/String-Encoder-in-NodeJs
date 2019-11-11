module.exports.encode=encode

function encode(str){
  var c="abcdefghijklmnopqrstuvwxyz";
  var index=[]

  anslist=[]
  anslist.push(str.length)
  var r=0;
  for (i of str)
  {
    r=r*c.length+c.indexOf(i)
  }
  r=String(r)

  var ans=""
  var count=0

  var t=0
  for(i=1;i<=Math.ceil(r.length/2);i++)
  {
  if(t==r.length-1)
  {
    var no=Number(r.charAt(t))
  }
  else {
    var no=Number(r.substring(t,t+2))
  }
    t+=2

    if(no<=32)
    {
      index.push(count)
      no=no+32
      ans=ans+String.fromCharCode(no)
    }
    else {
      ans=ans+String.fromCharCode(no)
    }

    count=count+1
  }

  anslist.push(ans)
  anslist.push(ans.length)
  anslist.push(decode(ans,index))

  return anslist

}

function decode(str,index){

  var c="abcdefghijklmnopqrstuvwxyz";
  var  no=""
  var count=0
  for(i of str)
  {
     if(index.indexOf(count)==-1)
    {
       n=str.charCodeAt(str.indexOf(i))
       no+=String(n)
     }
     else {
        n=str.charCodeAt(str.indexOf(i))
        n=Number(n)-32
        no+=String(n)
     }

     count=count+1
  }
  var r=""

  no=Number(no)

  while (no!=0)
  {
    r=r+c.charAt(no%c.length)
    no=Math.floor(no/c.length)
  }
  if(r=="")
  {
    r=c.charAt(0)
  }
   return r.split("").reverse().join("");
}
