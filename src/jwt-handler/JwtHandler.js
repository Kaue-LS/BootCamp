export const JwtHandler={
    JWT_Key:"https://g3pneustore.azurewebsites.net/api/Auth/Token",
    onChangeEvent: new CustomEvent('onJwtChange'),

    onChange:()=>{
        window.dispatchEvent(JwtHandler.onChangeEvent);
    },

    setJwt:value=>{
        localStorage.setItem(JwtHandler.JWT_Key,value);

        JwtHandler.onChange()
    },
    clearJwt:()=>{
        localStorage.removeItem(JwtHandler.JWT_Key);
        JwtHandler.onChange();
    },
    getJwt:()=>{
        return localStorage.getItem(JwtHandler.JWT_Key);
    },
    isJwtValid:()=>Boolean(JwtHandler.getJwt)
}