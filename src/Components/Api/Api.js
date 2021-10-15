import axios from 'axios'

export const ApiGet=axios.create({
  baseURL:'https://pneustoreg3.azurewebsites.net'
})
