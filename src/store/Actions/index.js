
// Created Action Creators (buyItem and removeFunctionality) which i will pass to the connect function as its second argument of its frist invocation.
export function buyItem(item) {
    return{
    type : "BUY",
    payload : item
  }  
} 

export function removeFeature(item) {
    return {
        type : "REMOVE" ,
        payload: item
    }
}