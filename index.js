
for(let num = 10; num<=20; num++){
  document.write(`${num},`)
}
document.write(`<br>`)
for(let num = 10; num <=20; num++){
  document.write(`${num*2},`)
}
document.write(`<br>`)
for(i=1;i<=9;i++){
  let res = 7 * i
  document.write(`${res},`)
}
document.write(`<br>`)
let sum = 0;
for(i =1; i<=15;i++){
  sum+=i
}
document.write(`${sum}<br>`)
def=0
for(i=0; i<=500; i++){
  def = (def+i)
}
document.write(`${def/500}<br>`)
let sumDoubles=0;
for(i=30;i<=80;i++){
  if(i%2==0){
    sumDoubles+=i
  }
}
document.write(`${sumDoubles}<br>`)
for(i=100; i<=200; i++){
  if(i%3===0){
    document.write(`${i},`)
  }
}
document.write(`<br>`)
for(i=1;i<=10;i++){
  for(j=1;j<=10;j++){
    res= i*j
    document.write(`${res},`)
  }
  document.write(`<br>`)
}