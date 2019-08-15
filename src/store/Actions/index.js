export function removeFeature(item) {
    return {
        type : "REMOVE" ,
        payload: item
    }
}

export function addAdditionalFeature(item) {
    return {
        type : "ADD",
        payload: item
    }
}