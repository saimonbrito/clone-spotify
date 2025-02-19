const url = 'http://localhost:3000'

import axios from 'axios'

const api = axios.create({
  baseURL: url,
})

export default api
