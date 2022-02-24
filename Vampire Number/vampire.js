//Given a vampire Number , you must find its fangs.

/*A number n with 2k  digits is called vampire there exists two numbers  x  and  y  of  k  digits each
such that n=x*y  and that x  and y  together have the same digits of  n.
Moreover, to exclude numbers which can be trivially obtained from smaller ones, x  and  y  cannot end both in 0.*/

let fangHunter=(vampire)=>{ //function to hunt a given vampire number's fangs
   let list=fangPerms(vampire);
   for(let i of list){
       for(let j of list){
           if(i*j==vampire && i!=j) {
               let k=i.toString()+j.toString();
               k=k.split("")
               vampire=vampire.toString().split("")
               for(let e of k){
                   let index=vampire.indexOf(e)
                   if(index==-1){
                        return [[false],[]];  
                    }
                    vampire.splice(index,1)
                }
               return [[true],[i,j]];
            }
       }
   }
   return [[false],[]];
}
let fangPerms=(number)=>{ //generates all possible numbers that are vampire.length/2 long 
    let list=[];
    number=number.toString();
    for(let i=0;i<number.length;i++){   
        n="";
        n+=number[i]
        for(let j=0;j<number.length;j++){
            if(n.length!=number.length/2 &&j!=i) n+=number[j]
            if(n.length==number.length/2){
                if(list.indexOf(n)==-1){
                    list.push(n)
                    n=""
                    n+=number[i]
                }
            }
        }
    }
    return list;
}
let isVampire=(number)=>{
    if(number.toString().length%2==1) return false;
    let [[bool],[fangs]]=fangHunter(number)
    return bool;
}

let vampireHunter=(i,j)=>{
    let tab=[]
    if(j==undefined){
        j=i
        i=0;
        for(let found=0;found<=j;i++){
            if(isVampire(i)){
                tab.push(i)
                found++
            }
        }
    }
   else{
        for(;i<=j;i++){
            if(isVampire(i)) tab.push(i)
        }
    }
    return tab.length==0?"None":tab;
}
console.log(vampireHunter(0,200000))