
/* 
  readyState
  0 : uninitalized -> 초기화
  1 : loading -> 로딩
  2 : loaded -> 로딩이 완료됨
  3 : interactive -> 인터랙티브
  4 : complete -> 완료
*/

// 아 xhr에서 원하는 값만 뽑아와서 그걸 그대로 변수이름처럼 쓴거군여
// xhrData 함수 만들기 method, url
//               구조 분해 할당 -> 초기값을 지정할 수 있다.
export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}){

  // const{method,url,body} = options

  const xhr = new XMLHttpRequest();
  // console.log(xhr);
  // 비동기 통신 오픈
  xhr.open(method,url)


  // Object.entries(headers).forEach(([key, value])=>{
  //   xhr.setRequestHeader(key,value);
  // })




  // 객체 구조 분해 할당
  //계속 호출이 되면서 변경이 됨
  xhr.addEventListener('readystatechange',()=>{
    const{status, readyState, response} = xhr; //객체 구조 분해 할당
    // 에러를 체크하기 위해 구문 작성
    if(status >= 200 && status < 400){
      // readyState => 통신성공만 알고 싶기 때문에 
      if(readyState === 4){
        console.log('통신 성공');
        onSuccess(JSON.parse(response)); // 실행공간 인수 1. argument로 전달
        // 원래는 문자화로 받아오니깐 -> parse을 사용해서 객체화 시킴거임
        // console.log(JSON.parse(response));

      }
    }else{
      onFail('통신실패')
    }
  })
  // 서버에 요청
  xhr.send(JSON.stringify(body));
}

/* 
xhrData({
  url:'https://jsonplaceholder.typicode.com/users/1',
  // 2. 파라미터로 전달받음
  onSuccess:(result)=>{
    console.log(result);

  },
  onFail:(err)=>{
    console.error(err);

  }
})
*/


xhrData.get = (url,onSuccess,onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}
















// xhrData('POST', 'https://jsonplaceholder.typicode.com/users',{
//   "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
// })




