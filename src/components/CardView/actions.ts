import { listCar } from "../../services/cars"
import { CarModel } from "./props"

export const loadCarData = async (id: number, setCarData:React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        const data = await listCar(id);
        setCarData(data)
    } catch (error) {
        console.log({error})
        throw error
    }
}
export const handlePreviousItem = async (carData: CarModel | null, setCarData:React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        if(carData && carData?.id>1){
            const data = await listCar(carData.id-1);
            if(data){
                setCarData(data)
            }
        }
    } catch (error) {
        console.log('erro ao processar dados', error)
        setCarData(null)
    }
}
export const handleNextItem = async (carData: CarModel | null, setCarData:React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        if(carData && carData?.id <11){
            const data = await listCar(carData.id+1);
            if(data){
                setCarData(data)
            }
        }
    } catch (error) {
        console.log('erro ao processar dados', error)
        setCarData(null)
    }
}