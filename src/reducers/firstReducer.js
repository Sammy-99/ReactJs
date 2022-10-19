const initialState = 3;

const calculateValue = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT" :
            console.log("first reducer " + state);
            return state = state + 2;
        case "DECREMENT" :
            return state = state - 1;
        default : 
            return state;
    }
}

export default calculateValue;