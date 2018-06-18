export const INCREAMENT = "INCREMENT";
export const DECREAMENT = "DECREAMENT";
export const ADDFIVE = "ADDFIVE";
export const SUBFIVE = "SUBFIVE";

export  const increament = () => {
    return {
        type: INCREAMENT
    }
}
export var decreament = () => {
    return {
        type: DECREAMENT
    }
}
export var addfive = () => {
    return {
        type: ADDFIVE,
        value:5
    }
}
export var subfive = () => {
    return {
        type: SUBFIVE,
        value: 5
    }
}