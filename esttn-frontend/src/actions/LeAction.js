import LeReducers from "../reducers/LeReducers";

export function fetchLes() {
  console.log("3") //2nd 
return (dispatch) => { //thunk
    return fetch("http://localhost:3000/les") //begins the fetch and returns a promise and goes back to ComponentDidMount
    .then(res => res.json()) // recieves the promise
    .then(les =>{ 
      console.log("4") //4th fetch completed!
      dispatch({type:"GET_LES", payload: les[0]} )})
    };
    console.log("5")//not gonna work because anything after a return would not be accessed 
}


export const createProduct = (product, le_id) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: product,
            le_id: le_id 
          })
        })
          .then(resp => resp.json())
          .then(product => dispatch({type:"CREATE_PRODUCT", product}))
          .catch(error => console.error(error))
    }
}







