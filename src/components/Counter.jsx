import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {
    // const count = useSelector((state) => state.counter.value);
    const { value } = useSelector((state) => state.counter);

    // output
    const dispatch = useDispatch(); 

    return (
        <div className="flex gap-2 justify-center items-center">
           <button 
            className="border-2 p-1" 
            // Always call the action on dispatch
            onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
            className="border-2 p-1" 
            // Always call the action on dispatch
            onClick={() => dispatch(incrementByValue(5))}
            >
                Increment By 5
            </button>
           <div>
                <h1>{value}</h1>
           </div>
           <button 
            className="border-2 p-1"
            onClick={() => dispatch(decrement())}
           >
            Decrement
            </button>
        </div>
    );
};

export default Counter;