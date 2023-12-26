import { createContext, useState, useRef, useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const ItemContext = createContext({});

export const ItemContextProvider = ({ children }) => {
    
    // For filter
    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(search);
    const [brand, setBrand] = useState(queryParams.get('brand')?.split(','));
    const [allBrands, setAllBrands] = useState([]);
    const [brandOrder, setBrandOrder] = useState([]);
    const [sort, setSort] = useState(queryParams.get('sort'));
    const [data, setData] = useState(null);
    const [range, setRange] = useState([5, 30]);
    const [minMaxValues, setMinMaxValues] = useState({ min: 0, max: 100 });
    const formatValueLabel = (value) => `₹${value}`;
    const getAriaValueText = (value) => `₹${value}`;

    // For item display panel
    const [tabNumber, setTabNumber] = useState('1');


    // For filter
    const handleChanges = async (event, newValue) => {
        setRange(newValue);
    }

    const handleCheckboxChange = (event, brandName) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setBrand((prevBrands) => [...prevBrands, brandName]);
            // setBrandOrder((prevOrder) => prevOrder.filter((item) => brand.includes(item)).concat(allBrands.filter((item) => !brand.includes(item))));
        } else {
            setBrand((prevBrands) => prevBrands.filter((item) => item !== brandName));
            // setBrandOrder((prevOrder) => prevOrder.filter((item) => brand.includes(item)).concat(allBrands.filter((item) => !brand.includes(item))));
        }
    };

    // For item display panel
    const handleTabChange = (event, newValue) => {
        setTabNumber(newValue);
    }

    return (
        <ItemContext.Provider value={
            {
                queryParams, brand, setBrand, allBrands, setAllBrands, 
                brandOrder, setBrandOrder, sort, setSort, data, setData, 
                range, setRange, minMaxValues, setMinMaxValues, formatValueLabel, 
                getAriaValueText, tabNumber, setTabNumber, handleChanges,
                handleCheckboxChange, handleTabChange, pathname, navigate
            }
        }>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContext;