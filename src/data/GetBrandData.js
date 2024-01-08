import EditDeleteButtons from "../components/EditDeleteButtons";

const createCounter = (sVal) => {
    let count = sVal;

    const incrementCounter = () => {
        count += 1;
        return count;
    };

    return incrementCounter;
};

function createData(row, counter) {
    return { 
        bcCode: row.bcCode, 
        sno: counter(), 
        brand: row.brand, 
        category: row.category, 
        actions: (<EditDeleteButtons tablename="brands" data={{b: row.brand, c: row.category, bcCode: row.bcCode}} />)
    };
}

const getBrandRows = (resData, sVal) => {
    const counter = createCounter(sVal);
    const mappedResData = resData.map((row) => {
        return createData(row, counter);
    });

    return mappedResData;
}

export default getBrandRows;