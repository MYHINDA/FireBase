import CarsViewer from "./carsView";
import NewCar from "./newCar";


function Host() {
    return <div>

        <div style={{ width: "50%", float: "left" }}>
            <NewCar />
        </div>

        <div style={{ width: "50%", float: "right" }}>
            <CarsViewer />
        </div>

    </div>

}

export default Host;