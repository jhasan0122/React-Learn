import React, {useState} from "react";
function MyComponent() {
    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");

    function handleAddCar() {
        const newcar = {year:carYear,
                                                            make:carMake,
                                                            model: carModel};
        setCars(c => [...c,newcar]);

        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarMake("");
    }
    function handleRemove(index) {
        setCars(c =>c.filter((_,i) => i !== index))
    }
    function handleYearChange(event) {
        setCarYear(event.target.value)
    }
     function handleModelChange(event) {
         setCarModel(event.target.value)
    }
     function handleMakeChange(event) {
         setCarMake(event.target.value)
    }

    return(<div>
            <h2>List of car object</h2>
            <ul>
                {cars.map((car,index) => <li key={index} onClick={() =>handleRemove(index)}>
                                                    {car.year} {car.make} {car.model}
                                                </li>)}
            </ul>
        <input type="number" value={carYear} onChange={handleYearChange}/>
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder={"Enter car make"}/>
        <input type="text" value={carModel} onChange={handleModelChange} placeholder={"Enter car model"}/>
        <button onClick={handleAddCar}>Add Car</button>

         </div>);
}

export default MyComponent