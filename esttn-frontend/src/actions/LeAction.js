import Le from "../reducers/Le";

export function fetchLes() {
return (dispatch) => {
    return fetch("http://localhost:3000/les")
    .then(res => res.json())
    .then(les =>dispatch({type:"GET_LES", les} ))
    };
}


export const createProduct = (product) => {
    debugger
    // const { name } = product
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







