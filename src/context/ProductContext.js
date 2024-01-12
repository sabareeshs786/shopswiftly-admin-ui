import { createContext, useState } from "react";

export const ProductContext = createContext({});

export const ProductContextProvider = ({children}) => {
    const [modelNo, setModelNo] = useState('');
    const [modelName, setModelName] = useState('');
    const [color, setColor] = useState('');
    const [screenSize, setScreenSize] = useState('');
    const [screenSizeUnit, setScreenSizeUnit] =  useState('');
    const [resolution, setResolution] = useState('');
    const [resolutionType, setResolutionType] = useState('');
    const [os, setOs] = useState('');
    const [pbrand, setPbrand] = useState('');
    const [pmodel, setPmodel] = useState('');
    const [pnoOfCores, setPnoOfCores] = useState('');
    const [pClockSpeed, setPClockSpeed] = useState('');
    const [ramSize, setRamSize] = useState('');
    const [ramUnit, setRamUnit] = useState('');
    const [storageSize, setStorageSize] = useState('');
    const [storageUnit, setStorageUnit] = useState('');
    const [primaryCamera, setPrimaryCamera] = useState('');
    const [secondaryCamera, setSecondaryCamera] = useState('');
    const [batteryCapacity, setBatteryCapacity] = useState('');
    const [batteryCapacityUnit, setBatteryCapacityUnit] = useState('');
    const [networkType, setNetworkType] = useState('');
    const [simType, setSimType] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [features, setFeatures] = useState('');
    const [browseType, setBrowseType] = useState('');
    const [manufacturerWarranty, setManufacturerWarranty] = useState('');
    const [inBoxWarrenty, setInBoxWarrenty] = useState('');

    const getNumericVal = (e) => {
        const input = e.target.value;
        return input.replace(/[^0-9]/g, '');
    };

    return ( 
        <ProductContext.Provider value={{
            modelNo, setModelNo, modelName, setModelName, color, setColor, screenSize, setScreenSize, 
            screenSizeUnit, setScreenSizeUnit, resolution, setResolution, resolutionType, setResolutionType,
            os, setOs, pbrand, setPbrand, pmodel, setPmodel, pnoOfCores, setPnoOfCores, pClockSpeed, setPClockSpeed,
            ramSize, setRamSize, ramUnit, setRamUnit, storageSize, setStorageSize, storageUnit, setStorageUnit,
            primaryCamera, setPrimaryCamera, secondaryCamera, setSecondaryCamera, batteryCapacity, setBatteryCapacity,
            batteryCapacityUnit, setBatteryCapacityUnit, networkType, setNetworkType, simType, setSimType,
            speciality, setSpeciality, features, setFeatures, browseType, setBrowseType, manufacturerWarranty,
            setManufacturerWarranty, inBoxWarrenty, setInBoxWarrenty,

            getNumericVal
        }} >
            {children}
        </ProductContext.Provider> 
    )
}