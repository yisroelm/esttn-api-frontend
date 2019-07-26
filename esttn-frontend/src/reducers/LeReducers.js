const initialState = { //stuff
    les: [],
    clients: [],
    products: [],
    appointments: []
}

export default (state = initialState, action) => { //action is expected
    switch(action.type){ //switch is case and when 

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


