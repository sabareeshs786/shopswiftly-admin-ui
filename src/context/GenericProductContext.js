import { createContext, useState } from "react";

export const GenericProductContext = createContext({});

export const GenericProductContextProvider = ({children}) => {
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

    return (
        <GenericProductContext.Provider value={{
            pname, setPname, currency, setCurrency, sp, setSp, mp, setMp,
            desc, setDesc, keywords, setKeywords, highlights, setHighlights,
            availability, setAvailability, sellers, setSellers, bestSeller,
            setBestseller
        }}>
            {children}
        </GenericProductContext.Provider>
    )
}