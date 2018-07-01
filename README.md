# FDS9 Redux 특강

## Step 1

Redux가 등장한 맥락 속에서 Redux의 존재 의의를 파악해봅니다.

- [Flux와 Redux](https://taegon.kim/archives/5288)
- [Context API가 Redux를 대체할 수 있을까요?](https://medium.com/@Dev_Bono/context-api%EA%B0%80-redux%EB%A5%BC-%EB%8C%80%EC%B2%B4%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C%EC%9A%94-76a6209b369b)

| Context API | Redux |
| ------- | ------- |
| (주로) 상태가 컴포넌트 state에 저장됨 | 상태가 외부 스토어에 저장됨 |
| Provider & Consumer를 사용해 값을 내려보냄 | `connect` HOC를 사용해 값을 내려보냄 |
| (주로) 객체지향 프로그래밍 스타일 | (주로) 함수형 프로그래밍 스타일 |
| React 컴포넌트의 기능 외에는 활용할 수 없음 | 다수의 미들웨어 라이브러리 및 개발도구를 통해 손쉽게 기능을 확장할 수 있음 |
| React 16.3 버전 이상에서만 지원됨 | React 버전에 상관없이 사용할 수 있음 |

## Step 1

Redux를 이루는 세 가지 구성요소(action, reducer, store)의 의미를 파악하고, 직접 Redux store를 작성해봅니다.

- [Redux 공식 문서 (한국어 번역)](https://deminoth.github.io/redux/)

## Step 2

[react-redux](https://www.npmjs.com/package/react-redux)를 활용해 Redux 세계와 React 세계를 연결하고, Ducks 패턴의 사용법을 익힙니다.

- [React와 함께 사용하기](https://deminoth.github.io/redux/basics/UsageWithReact.html)
- [Ducks: Redux Reducer Bundles](https://github.com/JisuPark/ducks-modular-redux)

## Step 3

[Glitch 서버](https://glitch.com/edit/#!/fds-json-server-todo-noauth)를 활용해 [redux-thunk](https://www.npmjs.com/package/redux-thunk)의 사용법을 익힙니다.

- [비동기 액션](https://deminoth.github.io/redux/advanced/AsyncActions.html)