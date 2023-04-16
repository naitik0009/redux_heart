const redux = require("redux");

const counterReducer = (state = { "counter" : 0 } ,action) => {
    
    if(action.type === 'increament'){
        return {
            counter:state.counter+1,
        }
    }
    if(action.type === 'decreament'){
        return {
            counter:state.counter-1,
        }
    }
    return state;
};

const store =  redux.createStore(counterReducer); //this will manage some data and will be determined by reducers

//let's create a subscriber 

const counterSubscriber = ()=>{
    const latestState = store.getState();
    console.log(latestState);
};

//let's subscribe 
store.subscribe(counterSubscriber);

//let's create the dispatcher
store.dispatch({type:"increament"});
store.dispatch({type:"decreament"});