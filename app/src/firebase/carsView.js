import { useDispatch, useSelector } from "react-redux";

function CarsViewer() {


    const store = useSelector(state => state)

    const dispatch = useDispatch()

    return <div style={{ border: "1px solid blue" }}>

        <h2> current  cars</h2>
        {
            store.cars.map((item, index) => {

                return <div key={index} style={{ border: "1px solid green" }}>
                    {item.model}<br /><br />
                    {item.year}<br /><br />
                    {item.color}<br /><br /><br /><br />
                    <input type="button" value="Remove" onClick={() => dispatch({ type: "DELETE", payload: item })} />

                </div>
            })
        }


    </div>
}
export default CarsViewer;