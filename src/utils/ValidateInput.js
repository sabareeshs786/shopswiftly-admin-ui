function isvalidInputData(dataObject) {
    for (const prop in dataObject) {
        if (dataObject.hasOwnProperty(prop)) {
            const value = dataObject[prop];
            if (!Boolean(value)) {
                return false;
            }
        }
    }
    return true;
}

export { isvalidInputData };