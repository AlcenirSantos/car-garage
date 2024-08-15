import axios from "axios";
import { CAR_API_BASE_URL } from "../constants/car";
import { CarModel } from "../components/CardView/props";

interface ApiREsponse {
    cars: CarModel[]
}

export const listCar = async (id: number) => {
    try {
        const response = await axios.get<ApiREsponse>(CAR_API_BASE_URL);

        const carData = response.data.cars.find((car)=> car.id ===id) || null;
        return carData;
    } catch (error) {
        throw error;
    }
}