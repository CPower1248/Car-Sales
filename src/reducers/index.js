import { ADD_FEAT, REMOVE_FEAT, TOTAL } from "../actions"

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_FEAT:
        const newFeat = state.additionalFeatures[action.payload - 1]
        return ({...state, car: {...state.car, features: [...state.car.features, newFeat]}})
      case REMOVE_FEAT:
        const remFeat = state.car.features.filter(item => {
          if (item.id !== action.payload) {
            return item
          }
        })
        return ({...state, car: {...state.car, features: remFeat}})
      case TOTAL:
        return ({...state, additionalPrice: action.payload})
      default:
        return state
    }
}

export default reducer
