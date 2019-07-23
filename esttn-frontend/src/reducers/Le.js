export default (state = {}, action) => {
    switch(action.type){

     case "COMMENCE_LE_FETCH":
        console.log("we are about to send fetch request")
        return state

    case "GET_LES":
        return {...state, les: action.les[0]}

     default:
        return state;
    }
}


