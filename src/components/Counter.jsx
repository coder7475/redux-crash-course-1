import { useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);

    return (
        <div className="flex gap-2 justify-center items-center">
           <button className="border-2 p-1">Increment</button>
           <div>
                <h1>{count}</h1>
           </div>
           <button className="border-2 p-1">Decrement</button>
        </div>
    );
};

export default Counter;