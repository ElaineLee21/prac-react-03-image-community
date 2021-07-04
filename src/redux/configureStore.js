import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";

// 히스토리 객체 하나 만들어주기
export const history = createBrowserHistory();

// 우리가 만든 히스토리와 라우터가 연결되고, 이제부터 브라우저 히스토리가 스토어에 저장될 것.
const rootReducer = combineReducers({
  user: User,
  router: connectRouter(history),
});

//withExtra어쩌고 : 다른 인수를 넘겨주겠다는 뜻
const middlewares = [thunk.withExtraArgument({ history: history })];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
// require는 package 가져올때 쓰는 거. import와 다르게 console에 리덕스 스토어에 담긴 데이터의 이전상태, 이후상태가 찍힘
// 즉, 배포 이후에는 콘솔에 저런게 찍히면 안되니까 아예 조건문으로 개발환경에서만 콘솔에 찍히게 처리해주는것
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// chrome extension인 redux devTools 사용 설정
// window어쩌구 해논거는, 사용 환경이 브라우저일 때에만 돌아가게 하려고 그런거임.
// 대문자로 리덕스데브툴즈 어쩌구는 redux devTools가 깔려있는지 확인하는거.
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// 미들웨어 묶어주기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// 미들웨어와 루트 리듀서를 엮어 스토어 만들기
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
