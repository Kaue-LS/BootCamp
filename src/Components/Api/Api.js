export const Api={
    baseUrl: 'https://pneustoreg3.azurewebsites.net/',
    
    
    readAllUrl :() =>Api.baseUrl + '/',
    readOneUrl:(id)=>Api.baseUrl + '/'+id,
    
    buildApiGetRequest: url => {
        return fetch(url, {
          method: 'GET',
        })
      },
}