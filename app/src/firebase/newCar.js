import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from './firebaseApp'


function NewCar() {

    const [car, setCar] = useState({ model: "", year: 0, color: "" })

    const dispatch = useDispatch();

    const store = useSelector(state=>state);

    const collection = ('Cars')

    const saveData = (obj) => {
        obj.map(async (item) => {
            await firebase.firestore().collection(collection).add(item)
        })
        
    }

    return <div style={{ border: "1px solid red" }}>

        <h2>Add new car</h2>

        Model: <input type="text" onChange={(e) => setCar({ ...car, model: e.target.value })} /><br />
        Year:  <input type="text" onChange={(e) => setCar({ ...car, year: e.target.value })} /><br />
        Color: <input type="text" onChange={(e) => setCar({ ...car, color: e.target.value })} /><br />

        <input type="button" value="ADD" onClick={() => dispatch({ type: "ADD", payload: car })} /><br />
        <input type="button" value="SaveData" onClick={() => saveData(store.cars)} /><br />

    </div>

}
export default NewCar;