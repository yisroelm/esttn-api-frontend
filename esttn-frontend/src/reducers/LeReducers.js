const initialState = {
    les: [],
    clients: [],
    products: [],
    appointments: []

}

export default (state = initialState, action) => {
    switch(action.type){

     case "COMMENCE_LE_FETCH":
        console.log("we are about to send fetch request")
        return state

    case "GET_LES":
        // fix this to be individual models
        return {...state, 
            les: [action.payload.name], 
            clients: action.payload.clients,
            products: action.payload.products,
            appointments: action.payload.appointments
        } //action.paylaod


    case "CREATE_PRODUCT":

        return {...state.products.push(action.payload)} 

     default:
        return state;
    }
}


