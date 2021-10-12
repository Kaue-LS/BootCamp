export const Api={
    baseUrl: 'https://pneustoreg3.azurewebsites.net/Produto',
    
    
    readAllUrl :() =>Api.baseUrl + '/',
    readOneUrl:(id)=>Api.baseUrl + '/'+id,
    
    buildApiGetRequest: url => {
        return fetch(url, {
          method: 'GET',
        })
      },
}