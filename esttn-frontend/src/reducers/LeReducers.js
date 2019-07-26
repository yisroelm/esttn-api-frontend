// import uuid from "uuid";
// export const uuidFn = uuid;

export default (state = {les: []}, action) => {
    switch(action.type){

     case "COMMENCE_LE_FETCH":
        console.log("we are about to send fetch request")
        return state

    case "GET_LES":
        // fix this to be individual models
        return {...state, les: [action.payload]} //action.paylaod


    case "CREATE_PRODUCT":
        // const product = {
        //     // fix uuid to just have the product.id
        //     id: uuidFn(),
        //     name: action.product
        // }
        
        state.les[0].products.push(action.product)
        const newProducts = state.les[0].products

        const newLes = {...state.les[0]}
        newLes.products = newProducts
        // debugger
        return {...state, les: [newLes]}

     default:
        return state;
    }
}


