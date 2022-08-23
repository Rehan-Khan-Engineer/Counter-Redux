import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //used for getting data out of the store
  //useSeclector expects a func which extracts slice of data from store
  //state is automatically provided by react-redux
  //automatic subscription is set for this component in which useSelector is used
  const counter = useSelector((state) => state.counter);
  const hideCounter = useSelector((state) => state.hideCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "hideCounter" });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseByHandler = () => {
    dispatch({ type: "increaseBy", amount: 10 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!hideCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
