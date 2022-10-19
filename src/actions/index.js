function doIncrement() {
    return {
        type: "INCREMENT"
    }
}

function doDecrement() {
    return {
        type: "DECREMENT"
    }
}

console.log("action");

export { doIncrement, doDecrement };