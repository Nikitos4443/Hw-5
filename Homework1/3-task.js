function findNb(m){
   let sum = 0;
   let n = 1;
   while(m > sum){
      sum += n**3
      n++
   }
   if (m !== sum){
       return -1;
   } else {
       return n-1;
   }
}
console.log(findNb(36))




