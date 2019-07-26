import LeReducers from "../reducers/LeReducers";

export function fetchLes() {
return (dispatch) => { //thunk
    return fetch("http://localhost:3000/les")
    .then(res => res.json())
    .then(les =>dispatch({type:"GET_LES", payload: les[0]} ))
    };
}


export const createProduct = (product) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            product
          })
        })
          .then(resp => resp.json())
          .then(product => dispatch({type:"CREATE_PRODUCT", product}))
          .catch(error => console.error(error))
    }
}







