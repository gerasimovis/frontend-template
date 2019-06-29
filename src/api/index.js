import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'http://www.omdbapi.com/'
})
