import { createContext, useState } from "react";

export const ProductContext = createContext({});

export const ProductContextProvider = ({children}) => {

    // For mobiles
    const [modelNo, setModelNo] = useState('');
    const [modelName, setModelName] = useState('');
    const [color, setColor] = useState('');
    const [screenSize, setScreenSize] = useState('');
    const [screenSizeUnit, setScreenSizeUnit] =  useState('inch');
    const [resolution, setResolution] = useState('');
    const [resolutionType, setResolutionType] = useState('');
    const [os, setOs] = useState('');
    const [pbrand, setPbrand] = useState('');
    const [pmodel, setPmodel] = useState('');
    const [pnoOfCores, setPnoOfCores] = useState('');
    const [pClockSpeed, setPClockSpeed] = useState('');
    const [ramSize, setRamSize] = useState('');
    const [ramUnit, setRamUnit] = useState('GB');
    const [storageSize, setStorageSize] = useState('');
    const [storageUnit, setStorageUnit] = useState('GB');
    const [primaryCamera, setPrimaryCamera] = useState('');
    const [secondaryCamera, setSecondaryCamera] = useState('');
    const [batteryCapacity, setBatteryCapacity] = useState('');
    const [networkType, setNetworkType] = useState('');
    const [simType, setSimType] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [features, setFeatures] = useState('');
    const [manufacturerWarranty, setManufacturerWarranty] = useState('');
    const [inBoxWarrenty, setInBoxWarrenty] = useState('');

    const resetProductFields = () => {
        setModelNo('');
        setModelName('');
        setColor('');
        setScreenSize('');
        setScreenSizeUnit('inch');
        setResolution('');
        setResolutionType('');
        setOs('');
        setPbrand('');
        setPmodel('');
        setPnoOfCores('');
        setPClockSpeed('');
        setRamSize('');
        setRamUnit('GB');
        setStorageSize('');
        setStorageUnit('GB');
        setPrimaryCamera('');
        setSecondaryCamera('');
        setBatteryCapacity('');
        setNetworkType('');
        setSimType('');
        setSpeciality('');
        setFeatures('');
        setManufacturerWarranty('');
        setInBoxWarrenty('');
    }
    

    return ( 
        <ProductContext.Provider value={{
            modelNo, setModelNo, modelName, setModelName, color, setColor, screenSize, setScreenSize, 
            screenSizeUnit, setScreenSizeUnit, resolution, setResolution, resolutionType, setResolutionType,
            os, setOs, pbrand, setPbrand, pmodel, setPmodel, pnoOfCores, setPnoOfCores, pClockSpeed, setPClockSpeed,
            ramSize, setRamSize, ramUnit, setRamUnit, storageSize, setStorageSize, storageUnit, setStorageUnit,
            primaryCamera, setPrimaryCamera, secondaryCamera, setSecondaryCamera, batteryCapacity, setBatteryCapacity,
            networkType, setNetworkType, simType, setSimType,speciality, setSpeciality, features, setFeatures, 
            manufacturerWarranty, setManufacturerWarranty, inBoxWarrenty, setInBoxWarrenty, resetProductFields
        }} >
            {children}
        </ProductContext.Provider> 
    )
}