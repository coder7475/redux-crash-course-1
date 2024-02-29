const logger = (store) => (next) => (action) => {
    const state = store.getState();
    
    console.log("current state => ", state);
    console.log("Action dispatched => ", action);

    next(action);

    console.log("Updated state => ", store.getState());
}

export default logger;