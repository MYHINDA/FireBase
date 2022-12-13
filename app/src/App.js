import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import firebase from './firebase/firebaseApp';

import Host from './firebase/host';

function App() {

  const dispatch = useDispatch();
  useEffect(async () =>
  {
    let data = await firebase.firestore().collection('Cars').get();
    let cars = [];

    data.forEach(doc =>
    {
      let obj = {
        id: doc.id, model: doc.data().model,
        year: doc.data().year, color: doc.data().color
      }
      cars.push(obj);
    })
    dispatch({type:"LOAD_DATA",payload:cars})
  }, [])
  
  return (
    <div className="App">
      <Host/>
    </div>
  );
}

export default App;
