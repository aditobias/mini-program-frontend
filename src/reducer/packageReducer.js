const initialState = {
    packageArr: []
};


const packageReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "ADD_BOOKING":
            return {...state, packageArr: [...state.packageArr, payload]};
        default:
            return state;
    }
};

export default packageReducer;