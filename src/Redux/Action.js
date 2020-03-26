export const addStuff = (i) => {
    return {
        type : "ADD_STUFF",
        index : i
    }
}
export const removeStuff = (i) => {
    return {
        type : "REMOVE_STUFF",
        index : i
    }
}


