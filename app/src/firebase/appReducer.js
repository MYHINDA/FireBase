import firebase from './firebaseApp'


const AppReducer = (state = { cars: [] }, action) => {
    debugger;
    switch (action.type) {

        case "LOAD_DATA":
            return { ...state, cars: action.payload }

        case "ADD":
            return { ...state, cars: [...state.cars, action.payload] }

        // case "SAVE_DATA":
        //     return { ...state, cars: [...state.cars, action.payload] }

        case "DELETE":
            let arr = [...state.cars]
            let arr2 = arr.filter(x => x.model !== action.payload.model &&
                                       x.year !== action.payload.year && x.color !== action.payload.color)
            const del = async () => {
                await firebase.firestore().collection('Cars').doc(action.payload.id).delete()
            }
            del()
            return { ...state, cars: arr2 }

        default:
            return state;
    }

}

export default AppReducer;