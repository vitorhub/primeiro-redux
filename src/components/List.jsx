import { useSelector } from "react-redux";

export default function List(){
    const cars = useSelector(state => state.cars)

    console.log(cars[0].name)

    return (
        <>
            {cars.map( (car, index )=>(
                <img key={index} src={car.url} alt={car.name}/>
            )
            )}
        </>
    )
}