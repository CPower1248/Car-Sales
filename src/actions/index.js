export const ADD_FEAT = "ADD_FEAT"
export const REMOVE_FEAT = "REMOVE_FEAT"
export const TOTAL = "TOTAL"

export const addFeat = itemId => {
    return ({type: ADD_FEAT, payload: itemId})
}
export const removeFeat = itemId => {
    return ({type: REMOVE_FEAT, payload: itemId})
}
export const total = additionalPrice => {
    return ({type: TOTAL, payload: additionalPrice})
}
