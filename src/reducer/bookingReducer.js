const initialState = {
    bookingArr: []
};


const bookingReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "ADD_BOOKING":
            return {...state, bookingArr: [...state.bookingArr, payload]};
        default:
            return state;
    }
};

export default bookingReducer;