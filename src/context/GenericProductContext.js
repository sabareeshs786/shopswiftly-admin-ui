import { createContext, useRef, useState } from "react";

export const GenericProductContext = createContext({});

export const GenericProductContextProvider = ({children}) => {
    const [errorFields, setErrorFields] = useState([]);
    const [pname, setPname] = useState('');
    const [currency, setCurrency] = useState('INR');
    const [sp, setSp] = useState('');
    const [mp, setMp] = useState('');
    const [desc, setDesc] = useState('');
    const [keywords, setKeywords] = useState('');
    const [highlights, setHighlights] = useState('');
    const [availability, setAvailability] = useState(false);
    const [sellers, setSellers] = useState('');
    const [bestSeller, setBestseller] = useState(false);

    const resetCommonFields = () => {
        setErrorFields([]);
        setPname('');
        setCurrency('INR');
        setSp('');
        setMp('');
        setDesc('');
        setKeywords('');
        setHighlights('');
        setAvailability('');
        setSellers('');
        setBestseller('');
    }
    const pnameRef = useRef();

    const getNumericVal = (e) => {
        const input = e.target.value;
        return input.replace(/[^0-9]/g, '');
    };

    const addErrField = (newItem) => {
        setErrorFields((prevItems) => [...prevItems, newItem]);
    };

    const removeErrField = (itemToRemove) => {
        setErrorFields((prevItems) => prevItems.filter((item) => itemToRemove !== item));
    };

    const currencySymbolMap = { 'INR': '₹', 'USD': '$', 'EURO': '€' }

    return (
        <GenericProductContext.Provider value={{
            pname, setPname, currency, setCurrency, sp, setSp, mp, setMp,
            desc, setDesc, keywords, setKeywords, highlights, setHighlights,
            availability, setAvailability, sellers, setSellers, bestSeller,
            setBestseller, pnameRef, getNumericVal, errorFields, setErrorFields,
            addErrField, removeErrField, currencySymbolMap, resetCommonFields
        }}>
            {children}
        </GenericProductContext.Provider>
    )
}