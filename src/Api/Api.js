import axios from "axios"
import { JwtHandler } from "../jwt-handler/JwtHandler"
export const Api={
    baseUrl: "https://g3pneustore.azurewebsites.net/api/",

    ReadProduct: ()=> Api.baseUrl+"Products",
    ReadProductID:id=>Api.baseUrl+"Products/"+id,
    SelectedTires:()=> Api.baseUrl +"CartItems",   

    DeleteProduct:id=>Api.baseUrl+"CartItems/"+id,

    CadastrarUrl: ()=>Api.baseUrl+ "Auth/Register",

    authHeader:()=>({
        Authorization:JwtHandler.getJwt(),
    }),

    buildApiRequest:(url,auth)=>
    fetch(url,{
        method:"GET",
        headers:auth ? new Headers(Api.authHeader()):undefined
    }),

    buildApiPostRequest: (url, body,auth) =>
    fetch(url, {
        method: "POST",
        headers: new Headers({
            "Content-type": "application/json",
            ...(auth ? Api.authHeader() : {}),
        }),
        body: JSON.stringify(body),
    }),

    buildApiDeleteRequest: (url,auth) =>
    fetch(url, {
        method: "DELETE",
        headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),
}

export const Axios=axios.create({
    baseURL:"https://g3pneustore.azurewebsites.net/api/",

})