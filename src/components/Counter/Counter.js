import React from 'react';
// import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/actions';

const Counter = () => {
  const value = useSelector(state => state.value);
  const step = useSelector(state => state.step);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => dispatch(increment(step))}
        onDecrement={() => dispatch(decrement(step))}
      />
    </div>
  );
};
export default Counter;

// const mapStateToProps = state => {
//   return {
//     value: state.value,
//     step: state.step,
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrement: value => dispatch(increment(value)),
//     onDecrement: value => dispatch(decrement(value)),
//   };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
