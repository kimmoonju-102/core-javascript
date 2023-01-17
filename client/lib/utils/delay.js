import { getNode } from "../dom/getNode.js";

const first = getNode('.first');

function delay(callback, timeout = 1000){
  setTimeout(callback,timeout);
}

// delay를 줘서 다시 callback하고  
// callback 함수이긴함 근데 이렇게 관리하면 안됌.
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.transform = 'rotate(360deg)';
    delay(()=>{
      first.style.top = '0px';
    })
  })
})


first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';