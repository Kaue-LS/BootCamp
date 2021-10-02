export const Api={
    baseUrl: '',
    authorization:'',

    readAllUrl :() =>Api.baseUrl + '/',
    readOneUrl:(id)=>Api.baseUrl + '/'+id,
    
    buildApiGetRequest: url => {
        return fetch(url, {
          method: 'GET',
          headers: new Headers({
            Authorization: Api.authorization,
          })
        })
      },
}