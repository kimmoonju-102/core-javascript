/* global gsap */

import { 
  attr,
  tiger,
  delayP,
  getNode as $,
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard
 } from "./lib/index.js";

// randingUserList 함수 만들기

// 유저 카드 생성
// 생성된 카드로 랜더링

// userList.js로 갑니다.
// renderUserCard 함수를 만들기
// 만들어진 한수 안에 creatUserCard 던지고,
// renderUsserCard 함수를 사용했을 때 랜더링일 잘 될 수 있도록

const userCardContainer = $('.user-card-inner');

async function rendingUserList(){
  renderSpinner(userCardContainer)
  //then으로 console.log 이용해서 알 수 있는 방법1
  // tiger.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
  //   console.log(res);
  // })
  try{
    await delayP(2000)

    $('.loadingSpinner').remove();

    // await 특징 공부하기 -> 코드의 실행 흐름을 알 수 잇다.
    let response = await tiger.get('http://localhost:3000/users');

    let userData = response.data;

    // item -> 

    // userData.forEach(data=> renderUserCard(userCardContainer,data))
    userData.forEach((data) => {
      renderUserCard(userCardContainer,data)
    })
    changeColor('.user-card');

    //객체 하나만 받아서 랜더링
    // renderUserCard(userCardContainer,userData) 

    // console.log(gsap.utils.toArray('.user-card'));


  gsap.to(gsap.utils.toArray('.user-card'),{
    x:0,
    opacity:1,
    duration:1.5,
    stagger: 0.2,
  })
}catch(err){
  // console.log(err);
  renderEmptyCard(userCardContainer)
  }
}
rendingUserList();

// 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요.


// 클릭한 대상이 e.target이다.
//              이벤트 객체 넣는거임
function handler(e){
  // closest 대상에 인접한걸 찾아줌 closest 공부해보기
    let deleteButton = e.target.closest('button');
    let article = e.target.closest('article');
    if(!deleteButton || !article) return;

    let id = attr(article,'data-index').slice(5);
    tiger.delete(`http://localhost:3000/users/${id}`).then(()=>{
      userCardContainer.innerHTML  = '';
      rendingUserList();
    })
}

userCardContainer.addEventListener('click', handler)