
import {clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString,addClass,removeClass } from './lib/index.js'
import { jujeobData } from "./data/data.js";


const submit = getNode('#submit');
// getNode 두번이나 호출 예방 -> 한번에 정의해서 사용 *쿼리셀렉터는 덜 쓰자!*
const resultArea = getNode('.result');

//주접 데이타함수를 호출할 수 있음
// jujeobData()



function clickSubmitHandler(e){
  e.preventDefault();
  // 안에 들어있는 input 값을 가져옴
  let name = getInputValue('#nameField');
  // 해당 valul값에 들어있는 리스트들이 나옴 (배열)
  let list = jujeobData(name)

  let pick = list[getRandom(list.length-1)];

  
  // 랜더링 막기 -> 조건문
  if(!name){
    console.log('이름을 입력해 주세요!');
    // 실행되지 않게 return 해서 종료시켜줌
    return
  }

  if(isNumericString(name)){
    console.log('제대로된 이름을 입력해주세요.');
    return
  }

  // 랜더링 하기 
  // 유틸함수
  clearContents(resultArea)
  insertLast(resultArea, pick)



}

submit.addEventListener('click',clickSubmitHandler)