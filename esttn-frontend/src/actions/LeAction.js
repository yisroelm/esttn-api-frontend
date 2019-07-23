
export function fetchLes(){
return (dispatch) => {
    return fetch("http://localhost:3000/les")
    .then(res => res.json())
    .then(les => this.setState({les: les[0]})) 
    .then(les =>dispatch({type:"GET_LES", les} ))
    };
}






