import axios from 'axios'
// export const Api={
//     baseUrl: 'https://pneustoreg3.azurewebsites.net',
    
    
//     // readAllUrl :() =>Api.baseUrl + '/Produto',
//     // readOneUrl:(id)=>Api.baseUrl + '/'+id,
//     // PostCart:()=>Api.baseUrl+'/Cart',
//     // ReadCart:()=>Api.baseUrl+'/Cart',


//     // buildApiGetRequest: url => {
//     //     return fetch(url, {
//     //       method: 'GET',
//     //     })
//     //   },

//     //   // Para colocar o produto no carrinho
//     //   buildApiPutRequest: (url, body) => {
//     //     return fetch(url, {
//     //         method: 'PUT',
//     //         headers:new Headers({
//     //           "Content-type": "application/json",
//     //         }),
//     //         body: JSON.stringify(body)
//     //     })
//     // },
// }

export const ApiGet=axios.create({
  baseURL:'https://localhost:44334'
})
export const ApiPost=axios.create({
  baseURL:'https://localhost:44334',

  

})