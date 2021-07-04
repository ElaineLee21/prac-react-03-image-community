const getCookie = (name) => {
  let value = "; " + document.cookie;
  // ; user_id= 이걸로 문자열을 자름.
  // 브라우저 주소창에 아무거나 친 후 콘솔에 document.cookie 해서
  // cookie가 어떻게 생겼는지 보고 왜 이렇게 스플릿하는지 공부해보자
  let parts = value.split(`; ${name}=`);

  // 만약 name이 없다면(즉, 우리가 찾는 쿠키가 없다면) 스플릿이 안됨
  // 만약 name이 있다면 `; ${name}=`을 기준으로 쿠키가 두 조각 난다.
  // 이를 if문으로 나타내면 아래와 같다
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

// exp=5 는 exp의 기본값을 5로 지정하는 것. 그러므로 setCookie는 exp를 인수로 받아오지 않아도 괜찮다.
const setCookie = (name, value, exp = 5) => {
  let date = new Date();

  //date를 현재로부터 exp일 뒤로 설정
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString}`;
};

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  console.log(date);
  document.cookie = name + "=; expires=" + date;
};

export { getCookie, setCookie, deleteCookie };
