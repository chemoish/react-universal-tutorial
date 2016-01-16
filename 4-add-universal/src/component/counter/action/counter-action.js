export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';

export function decrement() {
  return {
    type: DECREMENT
  };
};

export function increment() {
  return {
    type: INCREMENT
  };
}
