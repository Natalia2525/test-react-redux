const increment = value => ({
  type: 'counter/Increment',
  payload: value,
});

const decrement = value => ({
  type: 'counter/Decrement',
  payload: value,
});

export default { increment, decrement };
