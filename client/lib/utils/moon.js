
const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPlicy:'no-reffere',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}
// 에로우 function
// const tieger = async () =>{} 밑에 function 같음
export const tiger = async (options = {}) =>{

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {...defaultOptions.headers, ...options.headers}
  }
  //객체가 나옴 URL 제거한 나머지 옵션들
  // console.log(restOptions);

  let response = await fetch(url,restOptions);

  if(response.ok){
    // 할당
    response.data = await response.json()

  }
  //내보냄
  return response;
  // console.log(response);
}

tiger.get = async (url,options) => {
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url,body,options) =>{
  return tiger({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.put = (url,body,options) =>{
  return tiger({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url,options) =>{
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}