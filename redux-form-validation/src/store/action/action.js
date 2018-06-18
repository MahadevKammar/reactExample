export const AUTHENTICATING = "AUTHENTICATING";


export  const authenticating = (spin) => {
    return {
        type: AUTHENTICATING,
        auth:spin,      
    }
}
