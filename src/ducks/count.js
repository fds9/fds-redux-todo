// 액션 타입

const INCR = 'fds-redux-todo/count/INCR';
const ZERO = 'fds-redux-todo/count/ZERO';

// 액션 생산자 (action creator)
export function incr(amount) {
  return {
    type: INCR,
    amount,
  };
}

export function zero() {
  return {
    type: ZERO,
  };
}

// 리듀서
// 상태와 액션을 인수로 받아서, 다음 상태를 반환하는 *순수 함수*
export default function count(state = 0, action) {
  switch (action.type) {
    case INCR:
      return state + action.amount;
    case ZERO:
      return 0;
    default:
      return state;
  }
}
