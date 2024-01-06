import EditDeleteButtons from "../components/EditDeleteButtons";

const createCounter = () => {
    let count = 0;

    const incrementCounter = () => {
        count += 1;
        return count;
    };

    return incrementCounter;
};
const counter = createCounter();

function createData(brand, category) {
    return { sno: counter(), brand, category, actions: (<EditDeleteButtons />) };
}

const rows = [
    createData('apple', 'mobiles'),
    createData('samsung', 'mobiles'),
    createData('oppo', 'mobiles'),
    createData('vivo', 'mobiles'),
];

export default rows;