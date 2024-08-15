import { Button, Image, Text, View } from "react-native";
import { styles } from "./style";
import Logo from '../../../assets/logo.png'
import { Divider } from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import { BuyButton } from "../BuyButton";
import { useEffect, useState } from "react";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";
export const CardView = () => {
    const [carData, setCarData] = useState<CarModel | null>(null);
    const findDetails = async () => {
        await loadCarData(2, setCarData);
    }
    useEffect(() => {
        findDetails()
    }, [])

    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={Logo} />
        </View>
    )
    const renderCarDetails = () => (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.carBrand}>Lamborguini</Text>
            <Text style={styles.carName}>{carData?.carName}</Text>
        </View>
    )
    const renderCarImage = () => (
        <Image style={styles.image} source={{
            uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`
        }} />
    )

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button color="#01a6b3" title="<" onPress={() => handlePreviousItem(carData, setCarData)} />
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button color="#01a6b3" title=">" onPress={() => handleNextItem(carData, setCarData)} />
        </View>
    )
    return (
        <View style={styles.imageContainer}>
            {renderLogoBox()}
            <Divider />
            {renderCarDetails()}
            <View style={{ width: '100%', height: 100 }}>
                {renderCarImage()}
            </View>
            <Divider />
            <BuyButton />
            {renderPriceControls()}
        </View>
    );
};
