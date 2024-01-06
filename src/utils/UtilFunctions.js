const toCapitalize = (s) => s.length > 0 ? s[0].toUpperCase() + s.slice(1) : '';

const indianNumberFormat = (price) => {
    if (price === undefined)
        return '';
    let priceStr = price.toString();
    let result = '';
    let count = 0;
    let isThousandCounted = false;

    for (let i = priceStr.length - 1; i >= 0; i--) {
        count++;
        if (count === 4 && !isThousandCounted) {
            result = ',' + result;
            count = 1;
            isThousandCounted = true;
        }
        else if (count === 3 && isThousandCounted) {
            result = ',' + result;
            count = 1;
        }

        result = priceStr[i] + result;
    }

    return result;
}


export { toCapitalize, indianNumberFormat };