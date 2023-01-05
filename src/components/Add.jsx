import { useState } from "react"
import { useDispatch } from "react-redux"
import { addCar } from "../store/store"

export default function Add(){
    const [ estado, setEstado ] = useState({
        name: 'ferrari',
        url: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    })
    const dispatch = useDispatch()

    function onSubmit(e){
        e.preventDefault()
        dispatch(addCar(estado))
    }

    return (
        <>
          <form>
          <button type="submit" onClick={onSubmit}> add car </button>
          </form>
        </>
    )
}